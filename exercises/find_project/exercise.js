const mongo = require('mongodb').MongoClient
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('workshopper-exercise/comparestdout')

exercise = filecheck(exercise)

exercise = execute(exercise)

exercise = comparestdout(exercise)

let db
const url = 'mongodb://localhost:27017/learnyoumongo'

exercise.addSetup((mode, cb) => {
  this.submissionArgs = [3]
  this.solutionArgs = [3]

  mongo.connect(url, (err, _db) => {
    if (err) {
      return cb(err)
    }

    db = _db
    const col = db.collection('parrots')

    col.insert([{
      name: 'Fred',
      age: 1
    },
    {
      name: 'Jane',
      age: 3
    },
    {
      name: 'Jenny',
      age: 10
    }], cb)
  })
})

exercise.addCleanup((mode, pass, cb) => {
  db.collection('parrots').remove({}, (err) => {
    if (err) {
      return cb(err)
    }

    db.close()
    cb()
  })
})

module.exports = exercise
