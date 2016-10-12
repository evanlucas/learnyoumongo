const mongo = require('mongodb').MongoClient
const age = process.argv[2]

const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, (err, db) => {
  if (err) {
    throw err
  }

  const parrots = db.collection('parrots')

  parrots.count({
    age: {
      $gt: +age
    }
  }, (err, count) => {
    if (err) {
      throw err
    }

    console.log(count)
    db.close()
  })
})
