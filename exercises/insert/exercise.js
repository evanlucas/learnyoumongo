var mongo = require('mongodb').MongoClient
  , exercise = require('workshopper-exercise')()
  , through2 = require('through2')
  , filecheck = require('workshopper-exercise/filecheck')
  , execute = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , chalk = require('chalk')
  , assert = require('assert')

var firstNames = [
  'Jane'
, 'John'
, 'Jim'
, 'Jessie'
, 'Julia'
]

var lastNames = [
  'George'
, 'Skye'
, 'Love'
, 'Smith'
]

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

var sub = through2()

exercise = filecheck(exercise)

exercise = execute(exercise)

var db, url = 'mongodb://localhost:27017/learnyoumongo'

exercise.addSetup(function(mode, cb) {
  this.submissionArgs =
  this.solutionArgs = [randomItem(firstNames), randomItem(lastNames)]
  if (mode === 'verify') {
    return mongo.connect(url, function(err, _db) {
      if (err) return cb(err)
      db = _db
      db.collection('docs').remove({}, cb)
    })
  } else {
    process.nextTick(cb)
  }
})

function findDoc(args, cb) {
  var collection = db.collection('docs')
  var doc = {
    firstName: args[0]
  , lastName: args[1]
  }
  collection.find(doc).toArray(function(err, docs) {
    if (err) return cb(err)
    db.close()
    if (!docs.length) {
      return exercise.emit('fail', 'Could not find ' + JSON.stringify(doc))
    }
    var doc = docs[0]
    delete doc._id
    cb(null, doc)
  })
}

exercise.addProcessor(function(mode, cb) {
  var orig
  this.submissionStdout.pipe(sub)
  var args = this.solutionArgs
  sub.on('data', function(chunk) {
    chunk = chunk.toString()
    if (chunk)
      try {
        orig = JSON.parse(chunk)
        delete orig._id
      }
      catch (err) {
        exercise.emit('fail', 'Unable to parse JSON. ' +
          'Did you stringify the output?')
        cb(err)
      }
  })

  if (mode === 'verify') {
    sub.on('end', function() {
      if (orig) {
        findDoc(args, function(err, doc) {
          if (err) return cb(err)
          orig = sortObj(orig)
          doc = sortObj(doc)
          try {
            compare(orig, doc)
            cb(null, true)
          }
          catch (e) {
            console.log(e)
            exercise.emit('fail', e.message)
            cb(null, false)
          }
          //sub.end()
        })
      } else {
        cb(null, false)
      }
    })
  }
  this.submissionStdout = through2()
  if (mode === 'verify')
    this.solutionStdout = through2()

  if (mode === 'run') {
    sub.pipe(process.stdout)
    process.nextTick(function() {
      cb(null, true)
    })
  }
})

function sortObj(obj) {
  var keys = Object.keys(obj)
  var o = {}
  keys.sort()
  for (var i=0; i<keys.length; i++) {
    o[keys[i]] = obj[keys[i]]
  }
  return o
}

function compare(a, b) {
  var keys = Object.keys(a)
    , len = keys.length

  assert.deepEqual(a, b)
}

module.exports = exercise
