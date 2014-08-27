/**
 * Configuration for concurrent task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('concurrent', {
        compile: [
            'pngmin:dist',
            'imagemin:dist',
            'svgmin:dist',
            'sass:dist',
            'sass:distPrint',
        ]
    });

    // grunt.loadNpmTasks('grunt-concurrent');
};