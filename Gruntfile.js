module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        markdown: {
            all: {
                files: [{
                    expand: true,
                    src: 'docs/*.md',
                    dest: './',
                    ext: '.htm'
                }],
                options: {
                    template: 'docs/_markdown.html'
                }
            }
        },

        watch: {
            markdown: {
                files: ['docs/*.md'],
                tasks: ['markdown']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-markdown');

    grunt.registerTask('default', ['markdown']);

};