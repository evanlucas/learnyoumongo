var mongo = require('mongodb').MongoClient
  , exercise = require('workshopper-exercise')()
  , filecheck = require('workshopper-exercise/filecheck')
  , execute = require('workshopper-exercise/execute')

exercise = filecheck(exercise)

exercise = execute(exercise)

var db, url = 'mongodb://localhost:27017/learnyoumongo'

exercise.addSetup(function(mode, cb) {
  var self = this
  this.submissionArgs = ['keys', '554a655c0639034860349353']
  this.solutionArgs = ['keys', '554a655c0639034860349353']
  mongo.connect(url, function(err, _db) {
    if (err) return cb(err)
    db = _db
    col = db.collection('keys')
    col.remove({}, function(err) {
      if (err) return cb(err)
      col.insert({
        name: 'blah'
      , _id: '554a655c0639034860349353'
      }, cb)
    })
  })
})

exercise.addProcessor(function(mode, cb) {
  this.submissionStdout.pipe(process.stdout)
  var args = mode === 'run'
    ? this.submissionArgs
    : this.solutionArgs
  return this.on('executeEnd', function() {
    verify(args, cb)
  })
})



function verify(args, cb) {
  var col = db.collection(args[0])
  col.find({
    _id: args[1]
  }).toArray(function(err, docs) {
    if (err) return cb(err)
    if (docs.length) return cb(null, false)
    cb(null, true)
  })
}

module.exports = exercise
