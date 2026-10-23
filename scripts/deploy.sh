#!/usr/bin/env bash
set -euo pipefail

# 一键迁移启动：新构建的 .output -> 生产目录，chown，重启 pm2，验证
# 部署前自动把当前生产备份到 backups/pre-deploy-backup
# 用法: npm run deploy
# 可覆盖: SRC 新构建产物 | PROD_DIR 生产目录 | OWNER chown 属主

SRC="${SRC:-/home/dev_sheng/personality-evaluation-/.output}"
PROD_DIR="${PROD_DIR:-/workspace/www/personalitytest101}"
DST="$PROD_DIR/.output"
OWNER="${OWNER:-dev_sheng:dev_sheng}"

echo "== [1/5] 检查/构建 =="
if [ ! -f "$SRC/server/index.mjs" ]; then
  echo "新产物不存在，自动构建（约 2-5 分钟）..."
  pnpm run build
fi
[ -f "$SRC/server/index.mjs" ] || { echo "ERROR: 构建失败，无 server/index.mjs"; exit 1; }

echo "== [2/5] 备份当前生产（pre-deploy-backup） =="
sudo mkdir -p "$PROD_DIR/backups"
PRE="$PROD_DIR/backups/pre-deploy-backup"
sudo rm -rf "$PRE"
sudo mkdir -p "$PRE"
if [ -d "$DST" ]; then
  if command -v rsync >/dev/null 2>&1; then
    sudo rsync -a --delete "$DST/" "$PRE/"
  else
    sudo cp -a "$DST/." "$PRE/"
  fi
fi

echo "== [3/5] 迁移 .output -> $DST =="
sudo rm -rf "$DST"
sudo mkdir -p "$PROD_DIR"
sudo cp -a "$SRC" "$DST"
sudo chown -R "$OWNER" "$DST"

echo "== [4/5] 重启 pm2 (nuxt-app) =="
sudo pm2 restart nuxt-app --update-env || sudo pm2 start "$DST/server/index.mjs" --name nuxt-app --update-env
sudo pm2 save

echo "== [5/5] 验证 =="
sleep 3
curl -sI http://127.0.0.1:3001/ | head -n 3 || true
echo "迁移启动完成"
