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
                        if (tempArray[(tempArray.length) - 2] != 'components') {
                            return tempArray[(tempArray.length) - 1];
                        }
                        else {
                            return name;
                        }
                    }
                },
                files: {
                    'js/templates.js': ['js/templates/**/*.hbs', 'js/templates/views/**/*.hbs', 'js/templates/components/**/*.hbs']
                }
            }
        },

        watch: {
            emberTemplates: {
                files: ['js/templates/**/*.hbs'],
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