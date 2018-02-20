let gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    browserSync = require('browser-sync').create(),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');

let stylesPath = 'source/assets/stylesheets';

let cssExternals = [
  `${stylesPath}/css/vendors/semantic.min.css`,
  `${stylesPath}/css/vendors/calendar.css`,
  `${stylesPath}/css/vendors/nouislider.css`,
  `${stylesPath}/css/vendors/animate.css`,
]

const bundle = function(){
  return gulp.src(`${stylesPath }/scss/style.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest(`${stylesPath}/tmp`))
}

const build = function() {
  return gulp.src([...cssExternals, `${stylesPath}/tmp/bundle.css`])
    .pipe(concatCss('main.css', {
      rebaseUrls: false
    }))
    .pipe(gulp.dest(stylesPath))
    .pipe(browserSync.stream());
}

const deploy = function() {
  return gulp.src([...cssExternals, `${stylesPath}/tmp/bundle.css`])
    .pipe(concatCss('chameleon.css', {
      rebaseUrls: false
    }))
    .pipe(gulp.dest('dist/stylesheets'))
    .pipe(minifyCSS())
    .pipe(rename('chameleon.min.css'))
    .pipe(gulp.dest('dist/stylesheets'))
}

module.exports = { bundle, build, deploy };
