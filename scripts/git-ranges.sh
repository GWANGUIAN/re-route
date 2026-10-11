#!/usr/bin/env bash
# 상위 폴더의 개인 프로젝트 레포별 첫/마지막 커밋일과 커밋 수를 출력한다 (docs/PROJECTS.md 갱신용).
for d in magic-conch-shell fc26-division-dashboard google-ads 3d-avator kano-sbo; do
  p="$(dirname "$0")/../../$d"
  [ -d "$p/.git" ] || { echo "$d: 폴더 없음"; continue; }
  first=$(git -C "$p" log --format=%ad --date=short | tail -1)
  last=$(git -C "$p" log --format=%ad --date=short | head -1)
  echo "$d: $first ~ $last ($(git -C "$p" rev-list --count HEAD) commits)"
done
