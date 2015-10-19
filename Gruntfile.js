module.exports = function (grunt) {
	// include required plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// task configuration
	var taskConfig = {
		// load package data in pkg variable
		pkg: grunt.file.readJSON('package.json'),

		// describe clean task. this will delete the dest directory
		clean: {
			build: ['<%= output_dir %>']
		},

		// describe copy task
		copy: {
			index: {
				src: 'src/index.html',
				dest: '<%= output_dir %>/index.html'
			}
		}
	};

	// user configuration in an external file
	var userConfig = require('./grunt.user.config.js');

	// initialize the configuration with taskConfig and userConfig
	grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

	// register build task
	grunt.registerTask('build', ['clean', 'copy']);

	// register the default task
	grunt.registerTask('default', ['build']);
};