var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');

gulp.task('css', function(){
  return gulp.src('app/assets/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('concat', function() {
  return gulp.src(['app/assets/css/semantic.min.css', 'app/assets/css/style.css'])
    .pipe(concatCss('main.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/assets/css'));
});

gulp.task('views', function buildHTML() {
  return gulp.src('app/assets/pug/*.pug')
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('./app'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['css', 'concat'], function() {
  browserSync.init({
    server: "./app",
    notify: false
  });

  gulp.watch("app/assets/scss/**/*.scss", ['css']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
  gulp.watch("app/assets/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
