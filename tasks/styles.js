let gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    browserSync = require('browser-sync').create(),
    rename = require('gulp-rename');

let stylesPath = 'source/assets/stylesheets';

const build = function(){
  return gulp.src(`${stylesPath }/scss/style.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('main.css'))
    .pipe(gulp.dest(`${stylesPath}/css`))
    .pipe(browserSync.stream());
}

const deploy = function() {
  return gulp.src(`${stylesPath }/scss/style.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('chameleon.css'))
    .pipe(gulp.dest('dist/stylesheets'))
    .pipe(minifyCSS())
    .pipe(rename('chameleon.min.css'))
    .pipe(gulp.dest('dist/stylesheets'))
}

module.exports = { build, deploy };
