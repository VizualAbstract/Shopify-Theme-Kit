module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      styles: {
        files: ['source/styles/**/*.scss'],
        tasks: ['concat:styles'],
        options: {
          interrupt: true,
          spawn: false,
        },
      },
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'concat:scripts'],
        options: {
          interrupt: true,
          spawn: false,
        },
      },
      images: {
        files: ['source/images/**'],
        tasks: ['imagemin'],
        options: {
          interrupt: true
        },
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'source/javascript/**/*.js']
    },
    concat: {
      options: {
        seperator: ';',
      },
      scripts: {
        src: ['source/**/*.js'],
        dest: 'theme/assets/main.js.liquid',
      },
      styles: {
        src: ['source/**/*.scss'],
        dest: 'theme/assets/theme.scss.liquid',
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'source/images/',
          src: ['**/*.{jpg,gif,png}'],
          dest: 'theme/assets/'
        }],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint','concat','imagemin','watch']);
};