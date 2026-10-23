#!/usr/bin/env bash
set -euo pipefail

# 一键备份：把生产目录的 .output（含符号链接结构）备份到固定目录 backups/output-backup
# 上一份自动轮换为 backups/output-backup.prev（备份中断时仍有旧版可用）
# 用法: npm run backup
# 可覆盖: PROD_DIR 生产目录 | BACKUP_ROOT 备份根目录

PROD_DIR="${PROD_DIR:-/workspace/www/personalitytest101}"
BACKUP_ROOT="${BACKUP_ROOT:-$PROD_DIR/backups}"
DEST="$BACKUP_ROOT/output-backup"
PREV="$BACKUP_ROOT/output-backup.prev"

echo "== [1/3] 轮换：当前备份 -> .prev =="
sudo mkdir -p "$BACKUP_ROOT"
sudo rm -rf "$PREV"
[ -d "$DEST" ] && sudo mv "$DEST" "$PREV"

echo "== [2/3] 备份 .output -> $DEST =="
sudo mkdir -p "$DEST"
if command -v rsync >/dev/null 2>&1; then
  sudo rsync -a --delete "$PROD_DIR/.output/" "$DEST/"
else
  sudo cp -a "$PROD_DIR/.output/." "$DEST/"
fi

if [ -f "$PROD_DIR/.env" ]; then
  sudo cp "$PROD_DIR/.env" "$DEST/.env.bak"
  echo "已附带备份 .env"
fi

echo "== [3/3] 完成，备份目录内容 =="
sudo bash -c "ls -1 '$BACKUP_ROOT'" || true
