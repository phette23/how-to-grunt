module.exports = function(grunt) {
    // this tells Grunt about the plugins we installed
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        cssmin: {
            // "minify" target
            minify: {
                files: {
                    // format is
                    // 'outputfilename': ['list', 'of', 'stylesheets']
                    'build/css/main.css': ['css/main.css']
                }
            }
        },
        uglify: {
            minify: {
                files: {
                    'build/js/main.js': ['js/main.js']
                }
            }
        },
        copy: {
            minify: {
                files: {
                    'build/index.html': ['index.html']
                }
            }
        },
        watch: {
            minify: {
                // files to watch for changes
                // the "*" is a wildcard here
                files: ['*.html', 'css/*.css', 'js/*.js'],
                // tasks to run when changes are detected
                tasks: ['build']
            }
        }
    });

    // we're going to want to run cssmin, uglify, & copy together
    // so let's group them under a single "build" task
    grunt.registerTask('build', ['cssmin', 'uglify', 'copy']);
};
