#!/usr/bin/env node

const workshopper = require('workshopper-adventure')
const path = require('path')

const opts = {
  name: 'learnyoumongo',
  title: 'Learn MongoDB',
  description: 'Learn MongoDB',
  appDir: __dirname,
  exerciseDir: path.join(__dirname, 'exercises'),
  header: require('workshopper-adventure/default/header'),
  footer: require('workshopper-adventure/default/footer'),
  languages: ['en', 'es', 'ru', 'ja']
}

if (process.platform !== 'win32') {
  opts.menu = {
    bg: 15,
    fg: 'black'
  }
}

const learnyoumongo = workshopper(opts)

learnyoumongo.addAll([
  "MONGOD",
  "CONNECT",
  "FIND",
  "FIND PROJECT",
  "INSERT",
  "UPDATE",
  "REMOVE",
  "COUNT",
  "AGGREGATE"
])

learnyoumongo.execute(process.argv.slice(2))
