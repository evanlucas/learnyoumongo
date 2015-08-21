var mongo = require('mongodb').MongoClient
  , exercise = require('workshopper-exercise')()
  , filecheck = require('workshopper-exercise/filecheck')
  , execute = require('workshopper-exercise/execute')

exercise = filecheck(exercise)

exercise = execute(exercise)

var base = 'mongodb://localhost:27017/'
var exUrl = base + 'learnyoumongo'
var solUrl = base + 'learnyoumongo2'
var exdb, soldb

exercise.addSetup(function(mode, cb) {
  var self = this
  this.submissionArgs = ['learnyoumongo', 'keys', '554a655c0639034860349353']
  this.solutionArgs = ['learnyoumongo2', 'keys', '554a655c0639034860349353']

  mongo.connect(exUrl, function(err, _db) {
    if (err) return done(cb)
    exdb = _db
    insert(exdb, self.submissionArgs, cb)
  })
})

function insert(db, args, cb) {
  col = db.collection('keys')
  col.remove({}, { multi: true }, function(err) {
    if (err) {
      return cb(err)
    }
    col.insert({
      name: 'blah'
    , _id: args[2]
    }, function(err) {
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

exercise.addProcessor(function(mode, cb) {
  this.submissionStdout.pipe(process.stdout)
  var args = this.solutionArgs
  return this.on('executeEnd', function() {
    verify(args, exdb, cb)
  })
})

exercise.addCleanup(function(mode, result, cb) {
  exdb.collection('keys').remove({}, cb)
})

function verify(args, db, cb) {
  var col = db.collection(args[1])
  col.find({}).toArray(function(err, docs) {
    if (err) return cb(err)
    if (docs.length) {
      console.error('Expected document to be removed', docs)
      return cb(null, false)
    }
    cb(null, true)
  })
}

module.exports = exercise
