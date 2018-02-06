let gulp = require('gulp'),
    browserSync = require('browser-sync').create();

let stylesPath = 'source/assets/stylesheets',
    templatesPath = 'source/templates',
    scriptsPath = 'source/assets/javascripts';

const watch = function() {
  browserSync.init({
    server: {
      baseDir: 'source',
      index: 'views/index.html'
    },
    notify: false
  });

  gulp.watch(`${templatesPath}/**/*.pug`, ['templates']);
  gulp.watch(`${stylesPath}/scss/**/*.scss`, ['styles']);
  gulp.watch(`${scriptsPath}/**/*.js`, ['scripts']);
  gulp.watch('source/assets/**/*').on('change', browserSync.reload);
}

module.exports = { watch }
