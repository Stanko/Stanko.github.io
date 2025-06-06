#!/bin/sh

git fetch origin gh-pages gh-pages
git checkout gh-pages

git config user.name "GitHub Actions"
git config user.email "github-actions-bot@users.noreply.${GITHUB_HOSTNAME}"

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
git push origin gh-pages
