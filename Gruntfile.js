"use strict";

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
        bundleExec: true,
        relativeAssets: true,
        cssDir: 'static/css',
        sassDir: 'static/sass',
        imagesDir: 'static/img'
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          raw: 'line_numbers = :true\n'
        }
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    }
  });

  grunt.registerTask('default', ['compass:dev', 'watch']);
  grunt.registerTask('dist', ['compass:dist']);
};
