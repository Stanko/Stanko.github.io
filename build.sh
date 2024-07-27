#!/bin/sh

find . -name '.DS_Store' -type f -delete

cp ./node_modules/photoswipe/dist/photoswipe.css ./sass/components/_photoswipe.scss

zola build

if [ $? -eq 0 ]
then
  # Create JS file from search data
  mv ./public/search-data/index.html ./public/js/search-data.js
  rm -rf ./public/search-data/
else
  echo "Zola build failed"
  exit 1
fi
