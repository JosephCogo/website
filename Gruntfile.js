module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /js\/templates\//
        },
        files: {
          'js/templates.js': 'js/templates/**/*.hbs'
        }
      }
    },
    
    watch: {
      emberTemplates: {
        files: 'js/templates/**/*.hbs',
        tasks: ['emberTemplates']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
 
  // Default task(s).
  grunt.registerTask('default', ['emberTemplates']);
};