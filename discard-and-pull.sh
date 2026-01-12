#!/usr/bin/env bash
# discard-and-pull.sh —— 直接丢弃本地所有更改（含未跟踪文件）
set -euo pipefail

echo ">>> Discarding all local changes (STAGED/UNSTAGED)..."
git reset --hard
echo ">>> Removing all untracked files/dirs..."
git clean -xfd
echo ">>> Force syncing to origin/master..."
git fetch origin
git reset --hard origin/master
echo ">>> Done. Local is now 100% identical to origin/master."