### Status:
[![Build Status](https://travis-ci.org/ewape/gulp-boilerplate.svg?branch=nunjucks)](https://travis-ci.org/ewape/gulp-boilerplate)
[![Code Climate](https://codeclimate.com/github/ewape/gulp-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/ewape/gulp-boilerplate)
[![devDependency Status](https://img.shields.io/david/dev/ewape/gulp-boilerplate.svg)](https://david-dm.org/ewape/gulp-boilerplate?type=dev)

## Installation
```sh
$ git clone https://github.com/ewape/gulp-boilerplate.git
```

### Project setup
```sh
$ npm i
$ gulp build
```

##### Installing npm dependencies:
```sh
$ npm i <dependency-name> -D
```
##### Installing bower dependencies:
```sh
$ bower install <dependency-name> --save
```

### Tasks
Default task is equal to watch.
LiveReload feature requires <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei" target="_blank">ChromeLiveReload extension</a> or other setup.
```sh
$ gulp
$ gulp watch
```

##### Generate svg sprite:
```sh
$ gulp svg-sprite
```

##### Generate favicon:
```sh
$ gulp favicon
```

##### Download Google webfonts and generate a stylesheet:
```sh
$ gulp fonts
```

##### Clean build files:
```sh
$ gulp clean
```
##### Validate HTML:
```sh
$ gulp w3cjs
```
### Templating
<a href="https://mozilla.github.io/nunjucks/templating.html" target="_blank">Nunjucks templating docs</a><br>
<a href="https://github.com/mogga/sublime-nunjucks/blob/master/Nunjucks.tmLanguage" target="_blank">Nunjucks syntax support for Sublime Text</a>
