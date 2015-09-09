var stylus = require('gulp-stylus')

module.exports = function (gulp, plugins, config) {
  var conf = config.paths
  var sourcemaps = plugins.sourcemaps
  var concat = plugins.concat

  gulp.task('stylus', function () {
    gulp.src('./src/css/app.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./www/css/'));
  });
}
