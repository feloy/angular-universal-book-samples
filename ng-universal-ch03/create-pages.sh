#!/bin/sh

ng build --prod --app browser
ng build --prod --app server --output-hashing=false
webpack --config webpack.server.config.js
for i in / $(cat sitemap.txt); do 
  node dist/server.js dist/browser/index.html dist/universal $i
done
(
    cd dist/browser
    mv index.html .index.html
    cp * ../universal
    mv .index.html index.html
)

