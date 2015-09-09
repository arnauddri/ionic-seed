var jade = require('gulp-jade')

module.exports = function (gulp, plugins, config) {
  var conf = config.paths
  var sourcemaps = plugins.sourcemaps
  var concat = plugins.concat

  gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    gulp.src('./src/**/*.jade')
      .pipe(jade())
      .pipe(gulp.dest('./www/'))
    });
}
