const mongo = require('mongodb').MongoClient
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const chalk = require('chalk')

exercise = filecheck(exercise)

exercise = execute(exercise)
const base = 'mongodb://localhost:27017/'
const exUrl = base + 'learnyoumongo'
const solUrl = base + 'learnyoumongo2'
let exdb
let soldb

exercise.addSetup((mode, cb) => {
  this.submissionArgs = ['learnyoumongo']
  this.solutionArgs = ['learnyoumongo2']
  let count = 0
  let error

  function done (err) {
    count++
    if (err) {
      error = err
    }

    if (count === 2) {
      cb(error)
    }
  }

  mongo.connect(exUrl, (err, _db) => {
    if (err) {
      return done(err)
    }

    exdb = _db
    resetUsers(exdb, done)
  })

  mongo.connect(solUrl, (err, _db) => {
    if (err) {
      return done(err)
    }

    soldb = _db
    resetUsers(soldb, done)
  })
})

exercise.addProcessor((mode, cb) => {
  this.submissionStdout.pipe(process.stdout)

  return this.on('executeEnd', () => {
    verifyUser(exdb, (err, passed) => {
      if (err) {
        return cb(err)
      }

      cb(null, passed)
    })
  })
})

function resetUsers (db, cb) {
  const users = db.collection('users')
  users.remove({}, (err) => {
    if (err) {
      return cb(err)
    }

    users.insert({
      name: 'Tina',
      age: 30,
      username: 'tinatime'
    }, cb)
  })
}

function verifyUser (db, cb) {
  const users = db.collection('users')

  users.find({
    username: 'tinatime'
  }).toArray((err, docs) => {
    if (err) {
      return exercise.emit('fail', 'Error verifying exercise. ' + err.message)
    }

    if (!docs.length) {
      return exercise.emit('fail', 'Could not find document')
    }

    db.close()
    const doc = docs[0]
    if (doc.age === 40) {
      return cb(null, true)
    }

    exercise.emit('fail', 'Document has incorrect age property.' +
      'Expected: ' + chalk.green(40) + ' Actual: ' + chalk.red(doc.age))
    cb(null, false)
  })
}

module.exports = exercise
