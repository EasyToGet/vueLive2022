#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'


# 如果第一次執行 sh deploy.sh
# 推 git push -f git@github.com:EasyToGet/vueLive2022.git main:gh-pages 
# 推不上 github
# 改用 git push -f https://github.com/EasyToGet/vueLive2022.git main:gh-pages
# 並再隨意程式檔更動程式碼，再執行一次 sh deploy.sh 就可以了

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# https://github.com/EasyToGet/vueLive2022.git
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:EasyToGet/vueLive2022.git main:gh-pages
git push -f https://github.com/EasyToGet/vueLive2022.git main:gh-pages


cd -


