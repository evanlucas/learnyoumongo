const mongo = require('mongodb').MongoClient
const size = process.argv[2]

const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, (err, db) => {
  if (err) {
    throw err
  }

  const prices = db.collection('prices')

  prices.aggregate([
    {
      $match: {
        size: size
      }
    },
    {
      $group: {
        _id: 'average',
        average: {
          $avg: '$price'
        }
      }
    }
  ]).toArray((err, results) => {
    if (err) {
      throw err
    }

    if (!results.length) {
      throw new Error('No results found')
    }

    const o = results[0]
    console.log(Number(o.average).toFixed(2))
    db.close()
  })
})
