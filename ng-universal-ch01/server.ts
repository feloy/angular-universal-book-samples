import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from './dist/server/main.bundle';

enableProdMode();

const args = process.argv.slice(2);
if (args.length !== 1) {
    process.stdout.write('Usage: node dist/main.js <url>');
    process.exit();
}
renderModuleFactory(AppServerModuleNgFactory, {
    document: `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <base href="/">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>`,
    url: args[0]
}).then(string => process.stdout.write(string));
