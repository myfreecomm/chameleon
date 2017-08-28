var gulp  = require('gulp');
var buildSematicUI = require('./semantic/tasks/build');
var fs = require('fs');

gulp.task('build-semantic-ui', buildSematicUI);

gulp.task('build', ['build-config', 'build-semantic-ui'], function() {
  console.log('build');
});

gulp.task('build-config', function(filename) {
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    var chamelion = JSON.parse(data);
    fs.readFile('semantic-default.json', 'utf8', function (err, data) {
      var semanticDefault = JSON.parse(data);
      var config = Object.assign(semanticDefault, chamelion);
      fs.writeFile('semantic.json', JSON.stringify(config, null, 2), function() {
        console.log("DONE!");
      });
    });
  });
});
