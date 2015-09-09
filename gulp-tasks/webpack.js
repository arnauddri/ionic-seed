var gulp = require('gulp')
var gutil = require('gulp-util')
var webpack = require('webpack')

module.exports = function (gulp, plugins, config) {

  gulp.task('webpack', function(callback) {
    webpack(config.webpack, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        callback();
    });
  });
}
