const mongo = require('mongodb').MongoClient
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')

exercise = filecheck(exercise)

exercise = execute(exercise)

const base = 'mongodb://localhost:27017/'
const exUrl = base + 'learnyoumongo'
let exdb

exercise.addSetup(function (mode, cb) {
  const self = this
  this.submissionArgs = ['learnyoumongo', 'keys', '554a655c0639034860349353']
  this.solutionArgs = ['learnyoumongo2', 'keys', '554a655c0639034860349353']

  mongo.connect(exUrl, (err, _db) => {
    if (err) {
      return done(cb)
    }

    exdb = _db
    insert(exdb, self.submissionArgs, cb)
  })
})

function insert (db, args, cb) {
  const col = db.collection('keys')
  col.remove({}, { multi: true }, (err) => {
    if (err) {
      return cb(err)
    }

    col.insert({
      name: 'blah',
      _id: args[2]
    }, (err) => {
      if (err) {
        console.error('Error setting up exercise')
        console.error('This could be a bug in learnyoumongo')
        console.error('Please open an issue at:')
        console.error('https://github.com/evanlucas/learnyoumongo')
        return cb(err)
      }
      cb()
    })
  })
}

exercise.addProcessor((mode, cb) => {
  this.submissionStdout.pipe(process.stdout)
  const args = this.solutionArgs
  return this.on('executeEnd', () => {
    verify(args, exdb, cb)
  })
})

exercise.addCleanup((mode, result, cb) => {
  exdb.collection('keys').remove({}, cb)
})

function verify (args, db, cb) {
  const col = db.collection(args[1])
  col.find({}).toArray((err, docs) => {
    if (err) {
      return cb(err)
    }

    if (docs.length) {
      console.error('Expected document to be removed', docs)
      return cb(null, false)
    }

    cb(null, true)
  })
}

module.exports = exercise
