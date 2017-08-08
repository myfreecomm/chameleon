var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('css', function(){
  return gulp.src('app/assets/less/style.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['css'], function() {

    browserSync.init({
        server: "./app",
        notify: false
    });

    gulp.watch("app/assets/less/**/*.less", ['css']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/assets/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
