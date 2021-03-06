module.exports = function (grunt) {
	// include required plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// task configuration
	var taskConfig = {
		// load package data in pkg variable
		pkg: grunt.file.readJSON('package.json'),

		// describe clean task. this will delete the dest directory
		clean: {
			output: ['<%= output_dir %>'],
			tmp: ['<%= concat_temp_dir %>']
		},

		// describe concat task
		concat: {
			controllers: {
				options: {
					separator: '\n\n\n\n\n/******************************************************/\n\n\n\n',
					stripBanners: true,
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>\nAuthor: <%= pkg.author %> */\n\n\n\n'
				},
				src: ['src/common/controllers/*.js'],
				dest: '<%= concat_temp_dir %>/app/controllers.js'
			},
			directives: {
				options: {
					separator: '\n\n\n\n\n/******************************************************/\n\n\n\n',
					stripBanners: true,
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>\nAuthor: <%= pkg.author %> */\n\n\n\n'
				},
				src: ['src/common/directives/*.js'],
				dest: '<%= concat_temp_dir %>/app/directives.js'
			},
			services: {
				options: {
					separator: '\n\n\n\n\n/******************************************************/\n\n\n\n',
					stripBanners: true,
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>\nAuthor: <%= pkg.author %> */\n\n\n\n'
				},
				src: ['src/common/services/*.js'],
				dest: '<%= concat_temp_dir %>/app/services.js'
			}
		},

		// describe copy task
		copy: {
			index: {
				src: 'src/index.html',
				dest: '<%= output_dir %>/index.html'
			},
			favicon: {
				src: 'favicon.ico',
				dest: '<%= output_dir %>/favicon.ico'
			},
			vendor_css: {
				src: '<%= vendor_files.css %>',
				dest: '<%= output_dir %>/'
			},
			vendor_js: {
				src: '<%= vendor_files.js %>',
				dest: '<%= output_dir %>/'
			},
			vendor_fonts: {
				src: '<%= vendor_files.fonts %>',
				dest: '<%= output_dir %>/'
			},
			vendor_assets: {
				src: '<%= vendor_files.assets %>',
				dest: '<%= output_dir %>/vendor/assets/'
			},
			app_css: {
				src: 'src/app/app.css',
				dest: '<%= output_dir %>/app/app.css'
			},
			app_js: {
				src: 'src/app/app.js',
				dest: '<%= output_dir %>/app/app.js'
			},
			controllers: {
				src: '<%= concat_temp_dir %>/app/controllers.js',
				dest: '<%= output_dir %>/app/controllers.js'
			},
			directives: {
				src: '<%= concat_temp_dir %>/app/directives.js',
				dest: '<%= output_dir %>/app/directives.js'
			},
			directive_templates: {
				cwd: 'src/common/directives',
				src: '*.html',
				dest: '<%= output_dir %>/app/',
				expand: true
			},
			services: {
				src: '<%= concat_temp_dir %>/app/services.js',
				dest: '<%= output_dir %>/app/services.js'
			},
			services_templates: {
				cwd: 'src/common/services',
				src: '*.html',
				dest: '<%= output_dir %>/app/',
				expand: true
			}
		},

		// describe watch task
		watching: {
			files:['src/**/*', 'Gruntfile.js', 'grunt.user.config.js'],
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
	grunt.registerTask('build', ['concat', 'clean:output', 'copy', 'clean:tmp']);

	// register the default task
	grunt.registerTask('default', ['build']);
};