#!/bin/bash

npm run build

mkdir -p _site

mv -v dist *.html ./_site