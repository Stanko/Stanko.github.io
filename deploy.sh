#!/bin/sh

cp ./node_modules/photoswipe/dist/photoswipe.css ./sass/components/_photoswipe.scss

./zola-linux-0.15.3 build

# Create JS file from search data
mv ./public/search-data/index.html ./public/js/search-data.js
rm -rf ./public/search-data/

# Remove taxonomy pages
rm -rf ./public/tags ./public/category

# Remove taxonomy from the sitemap
awk 'NR==FNR{if (/muffinman.io\/(tags|category)\/.*/) for (i=-1;i<=1;i++) del[NR+i]; next} !(FNR in del)' ./public/sitemap.xml ./public/sitemap.xml > ./public/sitemap-tmp.xml

# Remove search data from the sitemap
awk 'NR==FNR{if (/muffinman.io\/search-data/) for (i=-1;i<=1;i++) del[NR+i]; next} !(FNR in del)' ./public/sitemap-tmp.xml ./public/sitemap-tmp.xml > ./public/sitemap.xml

# Remove temp
rm ./public/sitemap-tmp.xml

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
