let exercise = require('workshopper-exercise')()
const mongo = require('mongodb').MongoClient

exercise.requireSubmission = false

exercise.addProcessor((mode, cb) => {
  const url = 'mongodb://localhost/learnyoumongo'

  mongo.connect(url, (err, db) => {
    if (err) {
      return exercise.emit('fail', 'Error connecting to mongo. ' + err.message)
    }

    exercise.emit('pass', 'Successfully connected to MongoDB')
    db.close();
    cb(null, true)
  })
})

module.exports = exercise
