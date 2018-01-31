let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    babel = require("gulp-babel"),
    clean = require("gulp-clean");

let scriptsPath = "source/assets/javascripts";

let libs = [
  `${scriptsPath}/libs/jquery-3.2.1.min.js`,
  `${scriptsPath}/libs/semantic.min.js`,
  `${scriptsPath}/libs/calendar.js`,
  `${scriptsPath}/libs/nouislider.js`,
]

const compile = function() {
  return gulp.src(`${scriptsPath}/chameleon/**/*.js`)
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

const cleanFiles = function () {
  return gulp.src(`${scriptsPath}/chameleon/tmp`, {read: false})
    .pipe(clean());
}

module.exports = { compile, bundle, cleanFiles };
