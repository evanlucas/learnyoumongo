let exercise = require('workshopper-exercise')()
const exec = require('child_process').exec

exercise.requireSubmission = false

exercise.addProcessor((mode, cb) => {
  const filename = process.platform === 'win32'
    ? 'mongod.exe'
    : 'mongod'

  const errmsg = `It doesn't look like mongod is installed and in your $PATH`
  exec(`${filename} --version`, (err, stdout, stderr) => {
    if (err) {
      return exercise.emit('fail', errmsg)
    }

    if (mode === 'run') {
      console.log(stdout)
      return
    }

    const matches = stdout.match(/db version (.*)/)
    let vers
    if (matches) {
      vers = matches[1]
      exercise.emit('pass', 'mongod ' + vers)
    } else {
      exercise.emit('fail', 'Invalid output from mongod')
    }

    cb(null, !!vers)
  }).stdin.end()
})

module.exports = exercise
