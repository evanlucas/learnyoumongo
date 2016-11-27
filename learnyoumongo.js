#!/usr/bin/env node

var workshopper = require('workshopper')
  , path = require('path')

var opts = {
  name: 'learnyoumongo'
, title: 'Learn MongoDB'
, description: 'Learn MongoDB'
, appDir: __dirname
, exerciseDir: fpath('./exercises')
, footerFile: fpath('footer.md')
, languages: ['en', 'es', 'ru', 'ja', 'zh-cn']
}

if (process.platform !== 'win32') {
  opts.menu = {
    bg: 15
  , fg: 'black'
  }
}

workshopper(opts)

function fpath (f) {
  return path.join(__dirname, f)
}
