#! /usr/bin/env sh

set -e

yarn build

cd docs/.vuepress/dist

git init

git add -A

git commit -m 'deploy'

git branch -M main

git push -f git@github.com:ciocola/web.git main:gh-pages

cd -