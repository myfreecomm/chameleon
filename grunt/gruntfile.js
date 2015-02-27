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
    },

    php: {
      dist: {
        options: {
          port: 5000,
          base: '../src',
          keepalive: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-php');

  grunt.registerTask('start', ['php', 'watch']);

};