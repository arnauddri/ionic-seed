var gulp = require('gulp');
var path = require("path");
var plugins = require('gulp-load-plugins')();
var requireDirectory = require('require-directory');

var config = {
  cordova : {
      PLUGINS : []
  },
  paths: {
    tasks: './gulp-tasks',
    app: './www',
    stylus: ['./src/*.styl', './src/**/*.styl'],
    jade: ['./src/*.jade', './src/**/*.jade'],

    SRC_MODULES_PATH : 'scripts/**/*.module.js',
    SRC_PATH : 'src/**/**',
    DIST_PATH : 'www',

    LIBS : [],

    CSS_LIBS : [
      'node_modules/animate.css/animate.css'
    ],

    DESKTOP_SRC : 'platforms/browser/www/**/*',
    DESKTOP_DEST : 'platforms/browser/export/'
  },
  webpack: {
    entry: './src/app.js',
    output: {
      filename: 'app.js',
      path:  path.join(__dirname, 'www/js')
    }
  }
};

gulp.task('serve', ['stubby', 'ionic-serve', 'watch']);

gulp.task('watch', function() {
  gulp.watch(config.paths.jade, ['jade']);
  gulp.watch(config.paths.stylus, ['stylus']);
  gulp.watch(config.paths.SRC_PATH , ['webpack']);
});

// Autoload
requireDirectory(module, config.paths.tasks, {visit: loadTasks});

function loadTasks(mod) {
  mod(gulp, plugins, config);
}
