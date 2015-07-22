module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          watch: false,
        },
        files: {
          'source/styles/01 plugins/01 bootstrap.scss' : 'source/styles/bootstrap/bootstrap.scss',
        }
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
      plugin_styles: {
        src: ['source/styles/01 plugins/**/*.scss'],
        dest: 'theme/assets/plugins.scss.liquid',
      },
      timber_styles: {
        src: ['source/styles/02 timber/**/*.scss'],
        dest: 'theme/assets/timber.scss.liquid',
      },
      theme_styles: {
        src: ['source/styles/03 theme/**/*.scss'],
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
    watch: {
      bootstrap_styles: {
        files: ['source/styles/bootstrap/**/*.scss'],
        tasks: ['sass'],
        options: {
          interrupt: false,
          spawn: true,
        },
      },
      plugin_styles: {
        files: ['source/styles/01 plugins/**/*.scss'],
        tasks: ['concat:plugin_styles'],
        options: {
          interrupt: true,
          spawn: false,
        },
      },
      timber_styles: {
        files: ['source/styles/02 timber/**/*.scss'],
        tasks: ['concat:timber_styles'],
        options: {
          interrupt: true,
          spawn: false,
        },
      },
      theme_styles: {
        files: ['source/styles/03 theme/**/*.scss'],
        tasks: ['concat:theme_styles'],
        options: {
          interrupt: true,
          spawn: false,
        },
      },
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['concat:scripts'], // tasks: ['jshint', 'concat:scripts'],
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
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass','concat','imagemin','watch']);
};