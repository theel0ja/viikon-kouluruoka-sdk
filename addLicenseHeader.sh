#!/usr/bin/env bash

FILE=dist/widgets.js

cat ./license-header.js | cat - $FILE > temp && mv temp $FILE
