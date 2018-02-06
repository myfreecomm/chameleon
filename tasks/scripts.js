let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

let scriptsPath = 'source/assets/javascripts';

let libs = [
  `${scriptsPath}/libs/jquery-3.2.1.min.js`,
  `${scriptsPath}/libs/semantic.min.js`,
  `${scriptsPath}/libs/calendar.js`,
  `${scriptsPath}/libs/nouislider.js`,
]

const compile = function() {
  return gulp.src([`${scriptsPath}/chameleon/**/*.js`, `!${scriptsPath}/chameleon/tmp/**`])
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(`${scriptsPath}/chameleon/tmp/`))
}

const bundle = function() {
  return gulp.src([...libs, `${scriptsPath}/chameleon/tmp/bundle.js`])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(`${scriptsPath}`))
    .pipe(browserSync.stream())
}

const deploy = function() {
  return gulp.src([...libs, `${scriptsPath}/chameleon/tmp/bundle.js`])
    .pipe(concat('chameleon.js'))
    .pipe(gulp.dest('dist/javascripts'))
    .pipe(uglify())
    .pipe(rename('chameleon.min.js'))
    .pipe(gulp.dest('dist/javascripts'))
}

const cleanFiles = function () {
  return gulp.src(`${scriptsPath}/chameleon/tmp`, {read: false})
    .pipe(clean());
}

module.exports = { compile, bundle, cleanFiles, deploy };
