var pug = require('gulp-pug');
var gulp = require('gulp');

var templatesPath = "source/templates"

var build = function buildHTML() {
  return gulp.src(`${templatesPath}/*.pug`)
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('./source/views'));
};

module.exports = { build }
