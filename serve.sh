#!/bin/sh

find . -name '.DS_Store' -type f -delete

cp ./node_modules/photoswipe/dist/photoswipe.css ./sass/components/_photoswipe.scss

zola serve --interface 0.0.0.0 --base-url beg-tadic-stanko.local --port 1234
