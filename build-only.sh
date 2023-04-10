#!/bin/sh

./zola-linux-0.17.2 build

if [ $? -eq 0 ]
then
else
  echo "Zola build failed"
  exit 1
fi
