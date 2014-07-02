module.exports = function(grunt) {
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		tag: {
			banner: 
				'/*!\n' +
				' * <%= pkg.name %> <%= pkg.version %>\n' +
				' * <%= pkg.homepage %>\n' +
				' * \n' +
				' * Date <%= grunt.template.today("yyyy-mm-dd HH:MM Z") %>\n' +
				' */\n'
		},

		sass: {
			default: {
				options: {
					style: 'compressed',
					banner: '<%= tag.banner %>'
				},
				src: 'web/styles/style.scss',
				dest: 'web/styles/style.min.css'
			}
		},

		jshint: {
			default: ['Gruntfile.js', 'web/scripts/src/*.js']
		},

		concat: {
			default: {
				src: ['web/scripts/lib/*.js', 'web/scripts/src/*.js'],
				dest: 'web/scripts/script.js',
			},
		},

		uglify: {
			default: {
				options: {
					banner: '<%= tag.banner %>\n'
				},
				src: 'web/scripts/script.js',
				dest: 'web/scripts/script.min.js'
			}
		},

		compress: {
			default: {
				options: {
					archive: 'web/images-backup.zip'
				},
				files: [{
					expand: true,
					cwd: 'web/images',
					src: ['**'],
					dest: ''
				}]
			}
		},

		imagemin: {
			default: {
				files: [{
					expand: true,
					cwd: 'web/images',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'web/images'
				}]
			}
		},

		notify: {
			styles: {
				options: {
					title: 'Styles updated',
					message: 'Project <%= pkg.name %> <%= pkg.version %> styles updated.'
				}
			},
			scripts: {
				options: {
					title: 'Scripts updated',
					message: 'Project <%= pkg.name %> <%= pkg.version %> scripts updated.'
				}
			},
			images: {
				options: {
					title: 'Images updated',
					message: 'Project <%= pkg.name %> <%= pkg.version %> images updated.'
				}
			},
			watch: {
				options: {
					title: 'Grunt is watching',
					message: 'Grunt is watching project <%= pkg.name %> <%= pkg.version %>.'
				}
			},
			default: {
				options: {
					title: 'Build complete',
					message: 'Project <%= pkg.name %> <%= pkg.version %> builded successfully.'
				}
			}
		},

		watch: {
			styles: {
				files: ['web/styles/*.sass', 'web/styles/*.scss'],
				tasks: ['sass:default', 'notify:styles'],
				options: {
					livereload: true
				}
			},
			scripts: {
				files: ['web/scripts/**/*.js'],
				tasks: ['jshint:default', 'concat:default', 'uglify:default', 'notify:scripts'],
				options: {
					livereload: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('styles', ['sass:default', 'notify:styles']);
	grunt.registerTask('scripts', ['jshint:default', 'concat:default', 'uglify:default', 'notify:scripts']);
	grunt.registerTask('images', ['compress:default', 'imagemin:default', 'notify:images']);
	grunt.registerTask('default', ['notify:watch', 'watch']);
};