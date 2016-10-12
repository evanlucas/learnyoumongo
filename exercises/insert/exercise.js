const mongo = require('mongodb').MongoClient
let exercise = require('workshopper-exercise')()
const through2 = require('through2')
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const assert = require('assert')

const firstNames = [
  'Jane',
  'John',
  'Jim',
  'Jessie',
  'Julia'
]

const lastNames = [
  'George',
  'Skye',
  'Love',
  'Smith'
]

function randomItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const sub = through2()

exercise = filecheck(exercise)

exercise = execute(exercise)

let db
const url = 'mongodb://localhost:27017/learnyoumongo'

exercise.addSetup((mode, cb) => {
  this.submissionArgs =
  this.solutionArgs = [randomItem(firstNames), randomItem(lastNames)]
  if (mode === 'verify') {
    return mongo.connect(url, (err, _db) => {
      if (err) {
        return cb(err)
      }
      db = _db
      db.collection('docs').remove({}, cb)
    })
  } else {
    process.nextTick(cb)
  }
})

function findDoc (args, cb) {
  const collection = db.collection('docs')
  const doc = {
    firstName: args[0],
    lastName: args[1]
  }

  collection.find(doc).toArray((err, docs) => {
    if (err) {
      return cb(err)
    }
    db.close()

    if (!docs.length) {
      return exercise.emit('fail', 'Could not find ' + JSON.stringify(doc))
    }

    const doc = docs[0]
    delete doc._id
    cb(null, doc)
  })
}

exercise.addProcessor((mode, cb) => {
  let orig
  this.submissionStdout.pipe(sub)
  const args = this.solutionArgs

  sub.on('data', (chunk) => {
    chunk = chunk.toString()
    if (chunk) {
      try {
        orig = JSON.parse(chunk)
        delete orig._id
      } catch (err) {
        exercise.emit('fail', 'Unable to parse JSON. ' +
          'Did you stringify the output?')
        cb(err)
      }
    }
  })

  if (mode === 'verify') {
    sub.on('end', () => {
      if (orig) {
        findDoc(args, (err, doc) => {
          if (err) {
            return cb(err)
          }

          orig = sortObj(orig)
          doc = sortObj(doc)

          try {
            compare(orig, doc)
            cb(null, true)
          } catch (e) {
            console.log(e)
            exercise.emit('fail', e.message)
            cb(null, false)
          }
          // sub.end()
        })
      } else {
        cb(null, false)
      }
    })
  }
  this.submissionStdout = through2()
  if (mode === 'verify') {
    this.solutionStdout = through2()
  }

  if (mode === 'run') {
    sub.pipe(process.stdout)
    process.nextTick(() => {
      cb(null, true)
    })
  }
})

function sortObj (obj) {
  const keys = Object.keys(obj)
  const o = {}
  keys.sort()
  for (let i = 0; i < keys.length; i++) {
    o[keys[i]] = obj[keys[i]]
  }
  return o
}

function compare (a, b) {
  assert.deepEqual(a, b)
}

module.exports = exercise
