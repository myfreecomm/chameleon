let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    header = require('gulp-header');

let scriptsPath = 'source/assets/javascripts';

let pkg = require('../package.json');

let banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * Version: <%= pkg.version %>',
  ' * Homepage: <%= pkg.homepage %>',
  ' * Licensed under <%= pkg.license %>',
  ' */',
  ''].join('\n');

const compile = function() {
  return gulp.src([`${scriptsPath}/chameleon/**/*.js`, `!${scriptsPath}/chameleon/tmp/**`])
    .pipe(concat('bundle.js'))
    .pipe(babel())
    .pipe(gulp.dest(`${scriptsPath}/chameleon/tmp/`))
}

const bundle = function() {
  return gulp.src(`${scriptsPath}/chameleon/tmp/bundle.js`)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(`${scriptsPath}`))
    .pipe(browserSync.stream())
}

const deploy = function() {
  return gulp.src([`${scriptsPath}/chameleon/**/*.js`, `!${scriptsPath}/chameleon/tmp/**`])
    .pipe(concat('bundle.js'))
    .pipe(babel())
    .pipe(rename('chameleon.js'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('dist/javascripts'))
    .pipe(uglify())
    .pipe(rename('chameleon.min.js'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('dist/javascripts'))
}

const cleanFiles = function () {
  return gulp.src(`${scriptsPath}/chameleon/tmp`, {read: false})
    .pipe(clean());
}

module.exports = { compile, bundle, cleanFiles, deploy };
