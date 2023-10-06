# #!/usr/bin/env sh
 
# # 确保脚本抛出遇到的错误
# set -e
 
# # 生成静态文件 , yarn docs:build
# npm run docs:build
# rm -rf ../blog/dist/*

# # 将build生成的dist目录拷贝至上一层目录中
# cp -rf dist ../blog/

# # 进入生成的文件夹
# cd ../blog/dist

# # git初始化，每次初始化不影响推送
# git init
# git add -A
# git commit -m 'deploy'
# git branch -M main

# # 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:it235/it235.github.io.git main


#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:cattreeo/docs.git master:gh-pages

cd -