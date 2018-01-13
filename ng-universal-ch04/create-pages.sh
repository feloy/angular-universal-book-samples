#!/bin/sh

ng build --prod --app browser
ng build --prod --app server --output-hashing=false
webpack --config webpack.server.config.js
while read line; do
  node dist/server.js dist/browser/index.html dist/universal "$line"
done < sitemap.txt
(
    cd dist/browser
    mv index.html .index.html
    cp * ../universal
    mv .index.html index.html
)

