module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          outputStyle: 'expanded'
        }
      }
    },

    watch: {
      css: {
        files: ['../src/app/core/static/sass/**/*'],
        tasks: ['compass']
      },
      options: {
        livereload: true
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};