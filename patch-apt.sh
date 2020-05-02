#!/bin/bash

FILE_PATH=$1
FILES=$FILE_PATH/*

for f in $FILES; do
  echo "File '$f'"

  sed -i.bak "s|deb http://azure|deb [arch=amd64] http://azure|g" $f

done



