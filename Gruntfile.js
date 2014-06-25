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

		notify: {
			styles: {
				options: {
					title: 'Styles updated',
					message: 'Project <%= pkg.name %> <%= pkg.version %> styles updated.'
				}
			},
			default: {
				options: {
					title: 'Build complete',
					message: 'Project <%= pkg.name %> <%= pkg.version %> builded successfully.'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('styles', ['sass:default', 'notify:styles']);
};