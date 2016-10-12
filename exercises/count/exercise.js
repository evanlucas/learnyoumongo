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
  const numbers = [1, 3, 10]
  const number = numbers[Math.floor(Math.random() * (numbers.length - 1))]

  this.submissionArgs = [number]
  this.solutionArgs = [number]

  mongo.connect(url, (err, _db) => {
    if (err) {
      return cb(err)
    }

    db = _db
    const col = db.collection('parrots')
    col.insert([{
      name: 'Fred',
      age: numbers[0]
    },
    {
      name: 'Jane',
      age: numbers[1]
    },
    {
      name: 'Jenny',
      age: numbers[2]
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
