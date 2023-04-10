#!/bin/sh

find . -name '.DS_Store' -type f -delete

cp ./node_modules/photoswipe/dist/photoswipe.css ./sass/components/_photoswipe.scss

zola serve --drafts --interface 0.0.0.0 --base-url $(ipconfig getifaddr en0) --port 1234
