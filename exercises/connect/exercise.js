var exercise = require('workshopper-exercise')()
  , mongo = require('mongodb').MongoClient

exercise.requireSubmission = false

exercise.addProcessor(function(mode, cb) {
  var self = this
  var url = 'mongodb://localhost:27017/learnyoumongo'
  mongo.connect(url, function(err, db) {
    if (err) {
      return self.emit('fail', 'Error connecting to mongo. ' + err.message)
    }

    self.emit('pass', 'Successfully connected to MongoDB')
    cb(null, true)
  })
})

module.exports = exercise
