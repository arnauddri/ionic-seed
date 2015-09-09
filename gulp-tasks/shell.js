module.exports = function (gulp, plugins, config) {
  var shell = require('gulp-shell')

  gulp.task('ionic-serve',
    shell.task([
      'ionic serve',
    ]))

  gulp.task('standard',
    shell.task([
      'standard ./src/**',
    ]))
}
