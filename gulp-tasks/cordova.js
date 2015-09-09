module.exports = function (gulp, plugins, config) {
  var conf = config.cordova
  var shell = require('gulp-shell')

  // Plugins
  var total = conf.PLUGINS.length
  var commands = []
  for (var i = 0; i < total; i++) {
    commands[i] = 'cordova plugin add ' + conf.PLUGINS[i]
  }

  gulp.task('plugins-install', shell.task(commands))

  gulp.task('crosswalk-install', shell.task(['ionic browser add crosswalk@10.39.235.15']))
}
