# Grunt

<img align="right" height="100" src="http://gruntjs.com/img/grunt-logo-no-wordmark.svg">

Grunt framework for web projects using:

- Sass extension for CSS
- jQuery JavaScript library

### Setup

Grunt and Grunt plugins are installed and managed via npm, the [Node.js](http://nodejs.org/) package manager. Before setting up Grunt ensure that your npm is up-to-date (this might require `sudo` on certain systems).

Update npm:

	$ npm update -g npm

Install Grunt's command line interface (CLI):

	$ npm install -g grunt-cli

Install project dependencies:

	$ npm i

### Run

Compile Sass to compressed CSS:

	$ grunt styles

Uglify JavaScript:

	$ grunt scripts

Create backup archive and compress images:

	$ grunt images

Make Grunt watch styles and scripts folders for any changes:

	$ grunt

### Documentation

Visit the [Grunt](http://gruntjs.com/) website for complete documentation.
