let gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    browserSync = require('browser-sync').create(),
    rename = require('gulp-rename'),
    header = require('gulp-header');

let stylesPath = 'source/assets/stylesheets';

let pkg = require('../package.json');

let banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * Version: <%= pkg.version %>',
  ' * Homepage: <%= pkg.homepage %>',
  ' * Licensed under <%= pkg.license %>',
  ' */',
  ''].join('\n');

const build = function(){
  return gulp.src(`${stylesPath }/scss/style.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('main.css'))
    .pipe(gulp.dest(stylesPath))
    .pipe(browserSync.stream());
}

const deploy = function() {

  return gulp.src(`${stylesPath }/scss/style.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('chameleon.css'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest(`dist/${pkg.version}/stylesheets`))
    .pipe(minifyCSS())
    .pipe(rename('chameleon.min.css'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest(`dist/${pkg.version}/stylesheets`))
}

module.exports = { build, deploy };
