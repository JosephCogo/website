module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            js: {
                files: { 'js/emberapplication.js': 'js/emberapp/**/*.js' },
                options: {
                    preserveComments: false
                }
            }
        },

        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /js\/templates\//,

                    templateName: function (name) {
                        var tempArray = name.split('/');
                        return tempArray[(tempArray.length) - 1];
                    }
                },
                files: {
                    'js/templates.js': ['js/templates/**/*.hbs', 'js/templates/views/**/*.hbs']
                }
            }
        },

        watch: {
            emberTemplates: {
                files: ['js/templates/**/*.hbs', 'js/templates/views/**/*.hbs'],
                tasks: ['emberTemplates'],
                options: {
                    livereload: true
                }
            },
            uglify: {
                files: 'js/emberapp/**/*.js',
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ember-templates');

    grunt.registerTask('default', ['emberTemplates', 'uglify']);
};