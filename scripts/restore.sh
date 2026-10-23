#!/usr/bin/env bash
set -euo pipefail

# 一键恢复：从固定备份 backups/output-backup 恢复 .output 到生产目录并重启 pm2
# 恢复前自动把当前生产备份到 backups/pre-restore-backup
# 用法: npm run restore
# 可覆盖: PROD_DIR 生产目录 | BACKUP_ROOT 备份根目录

PROD_DIR="${PROD_DIR:-/workspace/www/personalitytest101}"
BACKUP_ROOT="${BACKUP_ROOT:-$PROD_DIR/backups}"
SRC="$BACKUP_ROOT/output-backup"

if [ ! -d "$SRC" ]; then
  echo "ERROR: 备份不存在: $SRC，请先执行 npm run backup"
  exit 1
fi

echo "== [1/3] 恢复前自动备份当前生产 =="
sudo mkdir -p "$BACKUP_ROOT"
PRE="$BACKUP_ROOT/pre-restore-backup"
sudo rm -rf "$PRE"
sudo mkdir -p "$PRE"
if command -v rsync >/dev/null 2>&1; then
  sudo rsync -a --delete "$PROD_DIR/.output/" "$PRE/"
else
  sudo cp -a "$PROD_DIR/.output/." "$PRE/"
fi

echo "== [2/3] 恢复 $SRC -> $PROD_DIR/.output =="
sudo rm -rf "$PROD_DIR/.output"
sudo mkdir -p "$PROD_DIR"
sudo cp -a "$SRC" "$PROD_DIR/.output"

if [ -f "$SRC/.env.bak" ]; then
  sudo cp "$SRC/.env.bak" "$PROD_DIR/.env"
  echo "已恢复 .env"
fi

echo "== [3/3] 重启 pm2 =="
sudo pm2 restart nuxt-app --update-env || sudo pm2 start "$PROD_DIR/.output/server/index.mjs" --name nuxt-app --update-env
sudo pm2 save
sleep 3
curl -sI http://127.0.0.1:3001/ | head -n 3 || true
echo "恢复完成: $SRC"
