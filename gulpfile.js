let gulp = require('gulp');

let styles = require('./tasks/styles'),
    scripts = require('./tasks/scripts'),
    templates = require('./tasks/templates'),
    browserSync = require('./tasks/watch');

gulp.task('css', styles.bundle );

gulp.task('styles', ['css'], styles.build );

gulp.task('babel', scripts.compile )

gulp.task('scripts', ['babel'], scripts.bundle );

gulp.task('cleanJS', scripts.cleanFiles );

gulp.task('templates', templates.build );

gulp.task('deployJS', scripts.deploy );

gulp.task('serve', ['templates', 'styles', 'scripts'], browserSync.watch );

gulp.task('default', ['serve']);
