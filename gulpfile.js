var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var babel = require("gulp-babel");
var clean = require("gulp-clean");

var assetsPath = "source/assets";
var stylesheetsPath = "source/assets/stylesheets";
var viewsPath = "source/views"
var jsPath = "source/assets/js";

var jsLibs = [
  `${jsPath}/libs/jquery-3.2.1.min.js`,
  `${jsPath}/libs/semantic.min.js`,
  `${jsPath}/libs/calendar.js`,
  `${jsPath}/libs/nouislider.js`,
]

gulp.task('css', function(){
  return gulp.src(`${stylesheetsPath }/scss/style.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename('chameleon.min.css'))
    .pipe(gulp.dest(`${stylesheetsPath }/css`))
    .pipe(browserSync.stream());
});

gulp.task('views', function buildHTML() {
  return gulp.src(`${viewsPath}/*.pug`)
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('./source/layouts'));
});

gulp.task('babel', function() {
  return gulp.src(`${jsPath}/chameleon/**/*.js`)
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(`${jsPath}/chameleon`))
})

gulp.task('scripts', ['babel'], function() {
  return gulp.src([...jsLibs, `${jsPath}/chameleon/tmp/bundle.js`])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(`${jsPath}`))
    .pipe(browserSync.stream())
});

gulp.task('clean', function () {
  return gulp.src(`${jsPath}/chameleon/tmp`, {read: false})
    .pipe(clean());
});

// Static Server + watching scss/html files
gulp.task('serve', ['views', 'css', 'scripts'], function() {
  browserSync.init({
    server: {
      baseDir: "source",
      index: 'layouts/index.html'
    },
    notify: false
  });

  gulp.watch(`${viewsPath}/**/*.pug`, ['views']);
  gulp.watch(`${stylesheetsPath}/scss/**/*.scss`, ['css']);
  gulp.watch(`${jsPath}/**/*.js`, ['scripts']);
  gulp.watch("source/layouts/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
