module.exports = function (gulp, plugins, config) {
  var conf = config.paths
  var sourcemaps = plugins.sourcemaps
  var concat = plugins.concat

  gulp.task('css-libs', function () {
    gulp.src(conf.CSS_LIBS)
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(concat('lib.css'))
      .pipe(gulp.dest(conf.DIST_PATH + '/css'))
  })
}
