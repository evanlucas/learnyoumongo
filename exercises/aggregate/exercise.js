var mongo = require('mongodb').MongoClient
  , exercise = require('workshopper-exercise')()
  , filecheck = require('workshopper-exercise/filecheck')
  , execute = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')

exercise = filecheck(exercise)

exercise = execute(exercise)

exercise = comparestdout(exercise)

var db, url = 'mongodb://localhost:27017/learnyoumongo'

var sizes = ['S', 'M', 'L']

function getSize(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

exercise.addSetup(function(mode, cb) {
  var self = this
  var size = getSize(sizes)
  this.submissionArgs = [size]
  this.solutionArgs = [size]
  mongo.connect(url, function(err, _db) {
    if (err) return cb(err)
    db = _db
    insertDocs(cb)
  })
})

exercise.addCleanup(function(mode, pass, cb) {
  db.collection('prices').remove({}, function(err) {
    if (err) return cb(err)
    db.close()
    cb()
  })
})

function insertDocs(cb) {
  var collection = db.collection('prices')
  collection.insert([
    {
      name: 'Tshirt'
    , size: 'S'
    , price: 10
    , quantity: 1
    , meta: {
        vendor: 'hanes'
      , location: 'us'
      }
    }
  , {
      name: 'Tshirt2'
    , size: 'M'
    , price: 15
    , quantity: 2
    , meta: {
        vendor: 'cotton'
      , location: 'uk'
      }
    }
  , {
      name: 'Tshirt3'
    , size: 'L'
    , price: 12
    , quantity: 1
    , meta: {
        vendor: 'cotton'
      , location: 'uk'
      }
    }
  , {
      name: 'Tshirt4'
    , size: 'S'
    , price: 20
    , quantity: 1
    , meta: {
        vendor: 'cotton'
      , location: 'uk'
      }
    }
  , {
      name: 'Tshirt5'
    , size: 'M'
    , price: 18
    , quantity: 2
    , meta: {
        vendor: 'cotton'
      , location: 'uk'
      }
    }
  , {
      name: 'Tshirt6'
    , size: 'L'
    , price: 9
    , quantity: 1
    , meta: {
        vendor: 'cotton'
      , location: 'uk'
      }
    }
  ], cb)
}

module.exports = exercise
