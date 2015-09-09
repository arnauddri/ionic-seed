module.exports = function (gulp, plugins, config) {
  var stubby = require('gulp-stubby-server')

  gulp.task('stubby', function (cb) {
    var options = {
      files: [
        'mocks/stubby.json'
      ]
    }
    stubby(options, cb)
  })

}
