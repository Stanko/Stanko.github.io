#!/bin/sh

./build/brz-darwin-arm64

if [ $? -eq 0 ]
then
  # Switch to gh-pages branch
  git fetch origin gh-pages gh-pages
  git checkout gh-pages

  # Delete old build
  find . ! -path './.git' ! -path . ! -name 'dist' -maxdepth 1 -exec rm -rf {} +

  # Copy everything from the new build to root
  cp -r ./dist/* ./
  # Remove dist folder
  rm -rf ./dist

  # Create .nojekyll file
  touch .nojekyll

  # Commit with current time
  git add .
  git commit -a -m "Deploy `date +'%Y-%m-%d %H:%M:%S'`"

  # Push changes
  # git push origin gh-pages
else
  echo "brz build failed"
  exit 1
fi
