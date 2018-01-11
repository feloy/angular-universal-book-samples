#!/bin/sh

ng build --prod --app server --output-hashing=false
webpack --config webpack.server.config.js
mkdir -p dist/universal/element
for i in '' $(cat sitemap.txt); do 
  node dist/server.js /$i > dist/universal/${i:-index.html};
done
