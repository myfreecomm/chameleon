var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var babel = require("gulp-babel");

var assetsPath = "source/assets";

gulp.task('css', function(){
  return gulp.src(`${assetsPath}/scss/style.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename('chameleon.min.css'))
    .pipe(gulp.dest(`${assetsPath}/css`))
    .pipe(browserSync.stream());
});

gulp.task('views', function buildHTML() {
  return gulp.src(`${assetsPath}/pug/*.pug`)
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('./source'));
});

gulp.task('scripts', function() {
  return gulp.src(`${assetsPath}/js/chameleon/**/*.js`)
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(gulp.dest(`${assetsPath}/js/`))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['views', 'css', 'scripts'], function() {
  browserSync.init({
    server: "./source",
    notify: false
  });

  gulp.watch(`${assetsPath}/pug/**/*.pug`, ['views']);
  gulp.watch(`${assetsPath}/scss/**/*.scss`, ['css']);
  gulp.watch(`${assetsPath}/**/*.js`, ['scripts']);
  gulp.watch("source/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
