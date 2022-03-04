#! /usr/bin/env sh

set -e

# yarn build
npm run build

cd docs/.vuepress/dist

git init

git add -A

git commit -m 'deploy'

git branch -M main

git push -f git@github.com:ciocola/blog.git main:gh-pages

cd -