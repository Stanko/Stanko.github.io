#!/bin/sh

find . -name '.DS_Store' -type f -delete

cp ./node_modules/photoswipe/dist/photoswipe.css ./sass/components/_photoswipe.scss

# TODO switch to brew version when it is released
./zola-mac-0.16 serve --drafts --interface 0.0.0.0 --base-url beg-tadic-stanko.local --port 1234
