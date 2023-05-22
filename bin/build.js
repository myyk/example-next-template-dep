#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("npm run env -- next build");