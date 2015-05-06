#!/usr/bin/env node

var workshopper = require('workshopper')
  , path = require('path')

workshopper({
  name: 'learnyoumongo'
, title: 'Learn MongoDB'
, description: 'Learn MongoDB'
, appDir: __dirname
, exerciseDir: fpath('./exercises')
, footerFile: fpath('footer.md')
})

function fpath (f) {
  return path.join(__dirname, f)
}
