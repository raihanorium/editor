module.exports = function (grunt) {
	// include required plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

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
			},
			vendor_css: {
				src: '<%= vendor_files.css %>',
				dest: '<%= output_dir %>/'
			},
			vendor_js: {
				src: '<%= vendor_files.js %>',
				dest: '<%= output_dir %>/',
				cwd: '.'
			},
			vendor_fonts: {
				src: '<%= vendor_files.fonts %>',
				dest: '<%= output_dir %>/',
				cwd: '.'
			},
			vendor_assets: {
				src: '<%= vendor_files.assets %>',
				dest: '<%= output_dir %>/vendor/assets/',
				cwd: '.'
			}
		},

		// describe watch task
		watching: {
			files:['src/**/*', 'Gruntfile.js'],
			tasks: ['build'],
	        options: {
	          	livereload: true
	        }
		},

		// describe connect, the start of the app in a http server
		connect: {
			server: {
				options: {
					port: 9001,
					base: '<%= output_dir %>'
				}
			}
		}
	};

	// user configuration in an external file
	var userConfig = require('./grunt.user.config.js');

	// initialize the configuration with taskConfig and userConfig
	grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

	// rename grunt watch task. because we want to run 'grunt watch' in order to build also
	grunt.renameTask( 'watch', 'watching' );

	// register watch task
	grunt.registerTask('watch', ['build', 'connect', 'watching']);

	// register build task
	grunt.registerTask('build', ['clean', 'copy']);

	// register the default task
	grunt.registerTask('default', ['build']);
};