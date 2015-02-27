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

    uncss: {
      dist: {
        files: {
          '../src/assets/css/application.css': ['../src/index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-uncss');
};