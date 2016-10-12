const mongo = require('mongodb').MongoClient

const firstName = process.argv[2]
const lastName = process.argv[3]
const doc = {
  firstName: firstName,
  lastName: lastName
}

const url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, (err, db) => {
  if (err) {
    throw err
  }

  const collection = db.collection('docs')
  collection.insert(doc, (err, data) => {
    if (err) {
      throw err
    }

    console.log(JSON.stringify(doc))
    db.close()
  })
})
