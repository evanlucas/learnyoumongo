var exercise = require('workshopper-exercise')()
  , exec = require('child_process').exec

exercise.requireSubmission = false

exercise.addProcessor(function(mode, cb) {
  var filename = process.platform === 'win32'
    ? 'mongod.exe'
    : 'mongod'
  var errmsg = 'It doesn\'t look like mongod is installed and in your $PATH'
  exec(filename + ' --version', function(err, stdout, stderr) {
    if (err) {
      return this.emit('fail', errmsg)
    }

    if (mode === 'run') {
      console.log(stdout)
      return;
    }

    if (matches = stdout.match(/db version (.*)/)) {
      var vers = matches[1]
      this.emit('pass', 'mongod ' + vers)
    } else {
      this.emit('fail', 'Invalid output from mongod')
    }

    cb(null, !!vers)
  }.bind(this)).stdin.end()
})

module.exports = exercise
