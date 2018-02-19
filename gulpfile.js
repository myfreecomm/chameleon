let gulp = require('gulp');

let styles = require('./tasks/styles'),
    scripts = require('./tasks/scripts'),
    templates = require('./tasks/templates'),
    browserSync = require('./tasks/watch');

gulp.task('css', styles.bundle);

gulp.task('styles', ['css'], styles.build);

gulp.task('babel', scripts.compile)

gulp.task('scripts', ['babel'], scripts.bundle);

gulp.task('cleanJS', scripts.cleanFiles);

gulp.task('templates', templates.build);

gulp.task('serve', ['templates', 'styles', 'scripts'], browserSync.watch);

gulp.task('default', ['serve']);

// DEPLOY WITH ALL DEPENDENCIES

gulp.task('deployAllJS', ['babel'], scripts.deployAll);

gulp.task('deployAllCSS', ['css'], styles.deployAll);

gulp.task('deployAll', ['deployAllJS', 'deployAllCSS']);

// DEPLOY WITHOUT DEPENDENCIES

gulp.task('deploy', ['deployJS', 'deployCSS']);

gulp.task('deployJS', scripts.deploy);

gulp.task('deployCSS', styles.deploy);
