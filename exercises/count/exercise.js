var mongo = require('mongodb').MongoClient
  , exercise = require('workshopper-exercise')()
  , filecheck = require('workshopper-exercise/filecheck')
  , execute = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')

exercise = filecheck(exercise)

exercise = execute(exercise)

exercise = comparestdout(exercise)

var db, url = 'mongodb://localhost:27017/learnyoumongo'

exercise.addSetup(function(mode, cb) {
  var self = this
  var numbers = [1, 3, 10]
  var number = numbers[Math.floor(Math.random() * (numbers.length-1))]
  this.submissionArgs = [number]
  this.solutionArgs = [number]
  mongo.connect(url, function(err, _db) {
    if (err) return cb(err)
    db = _db
    col = db.collection('parrots')
    col.insert([{
      name: 'Fred'
    , age: numbers[0]
    }, {
      name: 'Jane'
    , age: numbers[1]
    }, {
      name: 'Jenny'
    , age: numbers[2]
    }], cb)
  })
})

exercise.addCleanup(function(mode, pass, cb) {
  db.collection('parrots').remove({}, function(err) {
    if (err) return cb(err)
    db.close()
    cb()
  })
})

module.exports = exercise
