var mongo = require('mongodb').MongoClient
  , exercise = require('workshopper-exercise')()
  , filecheck = require('workshopper-exercise/filecheck')
  , execute = require('workshopper-exercise/execute')
  , chalk = require('chalk')

exercise = filecheck(exercise)

exercise = execute(exercise)
var base = 'mongodb://localhost:27017/'
var exUrl = base + 'learnyoumongo'
var solUrl = base + 'learnyoumongo2'
var exdb, soldb

exercise.addSetup(function(mode, cb) {
  this.submissionArgs = ['learnyoumongo']
  this.solutionArgs = ['learnyoumongo2']
  var count = 0, error
  function done(err) {
    count++
    if (err) {
      error = err
    }

    if (count === 2) cb(error)
  }

  mongo.connect(exUrl, function(err, _db) {
    if (err) return done(err)
    exdb = _db
    resetUsers(exdb, done)
  })

  mongo.connect(solUrl, function(err, _db) {
    if (err) return done(err)
    soldb = _db
    resetUsers(soldb, done)
  })
})

exercise.addProcessor(function(mode, cb) {
  this.submissionStdout.pipe(process.stdout)
  return this.on('executeEnd', function() {
    verifyUser(exdb, function(err, passed) {
      cb(null, passed)
    })
  })
})

function resetUsers(db, cb) {
  var users = db.collection('users')
  users.remove({}, function(err) {
    if (err) return cb(err)
    users.insert({
      name: 'Tina'
    , age: 30
    , username: 'tinatime'
    }, cb)
  })
}

function verifyUser(db, cb) {
  var users = db.collection('users')
  users.find({
    username: 'tinatime'
  }).toArray(function(err, docs) {
    if (err) return exercise.emit('fail', 'Error verifying exercise. ' +
      err.message)
    if (!docs.length) {
      return exercise.emit('fail', 'Could not find document')
    }

    db.close()
    var doc = docs[0]
    if (doc.age === 40) {
      return cb(null, true)
    }

    exercise.emit('fail', 'Document has incorrect age property.' +
      'Expected: ' + chalk.green(40) + ' Actual: ' + chalk.red(doc.age))
    cb(null, false)
  })
}

module.exports = exercise
