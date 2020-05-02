#!/bin/bash

APT_PATH=$1

# Patch command tries to patch azure apt sources to specify arch
patch() {
  if grep -q "http://azure" "$1"; then
    echo "Patching apt source: $1"
    sed -i.bak "s|deb http://azure|deb [arch=amd64] http://azure|g; s|deb http://security|deb [arch=amd64] http://security|g" $1
  fi
}

# Update any lines in the base apt config
patch $APT_PATH/sources.list

# Update any lines in other configs
FILES=$APT_PATH/sources.list.d/*
for f in $FILES; do
  patch $f
done


