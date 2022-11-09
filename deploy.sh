#!/bin/sh

./zola-linux-0.16.1 build

if [ $? -eq 0 ]
then
  # Create JS file from search data
  mv ./public/search-data/index.html ./public/js/search-data.js
  rm -rf ./public/search-data/

  # Switch to gh-pages branch
  git fetch origin gh-pages gh-pages
  git checkout gh-pages

  git config user.name "GitHub Actions"
  git config user.email "github-actions-bot@users.noreply.${GITHUB_HOSTNAME}"

  # Delete old build
  find . ! -path './.git' ! -path . ! -name 'public' -maxdepth 1 -exec rm -rf {} +

  # Copy everything from the new build to root
  cp -r ./public/* ./
  # Remove public folder
  rm -rf ./public

  # Create .nojekyll file
  touch .nojekyll

  # Commit with current time
  git add .
  git commit -a -m "Deploy `date +'%Y-%m-%d %H:%M:%S'`"

  # Push changes
  git push origin gh-pages
else
  echo "Zola build failed"
  exit 1
fi
