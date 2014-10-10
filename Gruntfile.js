module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                cwd: 'src/',
                src: '*',
                dest: 'fancybox/',
                flatten: true,
                filter: 'isFile'
            }
        },
        uglify: {
            options: {
                banner: '/*\n Name: <%= pkg.name %> \n Date: <%= grunt.template.today("dd-mm-yyyy") %> \n Version: <%= pkg.version %> \n Author: <%= pkg.author %> \n*/\n'
            },
            dist: {
                files: {
                    'fancybox/jquery.fancybox.min.js': ['src/jquery.fancybox.js']
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000, // http://localhost:8000/example/
                    hostname: 'localhost',
                    keepalive: true
                }
            }
        },
        watch: {
            files: "src/*",
            tasks: ['copy', 'uglify']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('run', ['copy', 'uglify']);

};