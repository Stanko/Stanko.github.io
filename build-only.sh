#!/bin/sh

./zola-linux-0.16 build

if [ $? -eq 0 ]
then
else
  echo "Zola build failed"
  exit 1
fi
