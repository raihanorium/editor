module.exports = {
	output_dir: 'dist',
	concat_temp_dir: '.tmp',

	vendor_files: {
	    js: [
			'vendor/jquery/dist/jquery.min.js',
			'vendor/bootstrap/dist/js/bootstrap.min.js',
			'vendor/angular/angular.min.js'
	    ],
	    css: [
	    	'vendor/bootstrap/dist/css/bootstrap.min.css'
	    ],
	    fonts: [
	    	'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
	    	'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
	    	'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
	    	'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
	    	'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
	    ],
	    assets: []
  	}
};