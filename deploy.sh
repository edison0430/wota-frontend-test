#!/usr/bin/env sh

# 發生錯誤時終止
set -e

# 構建
npm run build

# 進入構建文件夾
cd dist

# 如果你要部署到自定義域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:edison0430/wota-frontend-test.git master:gh-pages

cd -