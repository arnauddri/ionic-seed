module.exports = function (gulp, plugins, config) {
  var conf = config.paths

  var src = conf.DESKTOP_SRC
  var destDir = conf.DESKTOP_DEST
  var shell = require('gulp-shell')

  var zip = require('gulp-zip')

  var target = 'mock'
  if (process.env.TARGET) {
    target = process.env.TARGET
  }

  console.log('Export : setting target to ' + target)

  gulp.task('desktop', ['desktop-export'])

  gulp.task('desktop-export', ['desktop-prepare'], function () {
    console.log('Export finished : ' + destDir + 'desktop.zip')

    return gulp.src(src)
      .pipe(zip('desktop.zip'))
      .pipe(gulp.dest(destDir))
  })

  gulp.task('desktop-prepare', shell.task('TARGET=' + target + ' cordova prepare browser'))

  gulp.task('desktop-add', shell.task('cordova platform add browser'))
}
