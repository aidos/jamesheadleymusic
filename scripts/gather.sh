#!/bin/bash

rm -rdf ./dist

wget --recursive http://192.168.56.101:5012
mv "192.168.56.101:5012" dist
cp -r ../app/static/js/* ./dist/static/js/

mv dist/soundcloud/apprentice.html\?iframe\=true dist/soundcloud/apprentice.html
mv dist/soundcloud/tower.html\?iframe\=true dist/soundcloud/tower.html
mv dist/soundcloud/shelf-life.html\?iframe\=true dist/soundcloud/shelf-life.html
mv dist/soundcloud/jennings.html\?iframe\=true dist/soundcloud/jennings.html

