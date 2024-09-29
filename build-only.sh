#!/bin/sh

./zola-linux-0.19.2 build

if [ $? -eq 0 ]
then
else
  echo "Zola build failed"
  exit 1
fi
