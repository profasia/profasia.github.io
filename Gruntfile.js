var fs = require("fs");

module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({

    pkg: pkg,

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            pkg: pkg,
            cdn: function(path) {
              return '/public/' + path;
            }
          }
        },
        files: [ {
          expand: true,
          src: "**/*.jade",
          dest: "",
          cwd: "views/pages",
          ext: '.html'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['jade']);

};