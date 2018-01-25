var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('css', function(){
  return gulp.src('app/assets/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename('chameleon.min.css'))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('views', function buildHTML() {
  return gulp.src('app/assets/pug/*.pug')
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('./app'));
});

gulp.task('scripts', function() {
  return gulp.src('app/assets/js/src/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('app/assets/js/dist/'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['views', 'css', 'scripts'], function() {
  browserSync.init({
    server: "./app",
    notify: false
  });

  gulp.watch("app/assets/pug/**/*.pug", ['views']);
  gulp.watch("app/assets/scss/**/*.scss", ['css']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
  gulp.watch("app/assets/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
