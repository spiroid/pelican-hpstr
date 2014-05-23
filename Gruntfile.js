"use strict";

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Javascript files validation
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'static/js/*.js',
        'static/js/plugins/*.js',
        '!static/js/scripts.min.js'
      ]
    },

    uglify: {
      dist: {
        files: {
          'static/js/scripts.min.js': [
            'static/js/plugins/*.js',
            'static/js/_*.js'
          ]
        }
      }
    },

    lingua: {
      extract: {
        potDest: 'messages.pot', // dest path must exist
        scanDirs: ['.'] // array of directories to scan
      }
    },


    // Watches files for changes and runs tasks based on the changed files
    watch: {
      compass: {
        files: ['static/sass/{,**/}*.scss'],
        tasks: ['compass:dev']
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        config: 'config.rb',
        relativeAssets: true,
        cssDir: 'static/css',
        sassDir: 'static/sass'
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          sourcemap: true
        }
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    // Cleanup / remove some files
    clean: {
      dist: [
        'static/css/main.min.css',
        'static/js/scripts.min.js'
      ]
    }
  });

  grunt.registerTask('default', ['clean', 'uglify', 'compass:dev', 'watch']);
  grunt.registerTask('dist', ['compass:dist']);
};
