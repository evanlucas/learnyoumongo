var mongo = require('mongodb').MongoClient
  , exercise = require('workshopper-exercise')()
  , filecheck = require('workshopper-exercise/filecheck')
  , execute = require('workshopper-exercise/execute')
  , chalk = require('chalk')

exercise = filecheck(exercise)

exercise = execute(exercise)

var db, url = 'mongodb://localhost:27017/learnyoumongo'

exercise.addSetup(function(mode, cb) {
  if (mode === 'verify') {
    return mongo.connect(url, function(err, _db) {
      if (err) return cb(err)
      db = _db
      resetUsers(cb)
    })
  }
})

exercise.addProcessor(function(mode, cb) {
  this.submissionStdout.pipe(process.stdout)
  return this.on('executeEnd', function() {
    verifyUser(function(err) {
      cb(null, true)
    })
  })
})

function resetUsers(cb) {
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

function verifyUser(cb) {
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
      'Expected: %s Actual: %s', chalk.green(40), chalk.red(doc.age))
    cb(null, false)
  })
}

module.exports = exercise
