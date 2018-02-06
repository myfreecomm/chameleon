let gulp = require('gulp'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync').create();

let templatesPath = 'source/templates'

const build = function buildHTML() {
  return gulp.src(`${templatesPath}/*.pug`)
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('./source/views'))
  .pipe(browserSync.stream());
};

module.exports = { build }
