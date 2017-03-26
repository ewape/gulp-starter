### Status:
[![Build Status](https://travis-ci.org/ewape/gulp-boilerplate.svg?branch=nunjucks)](https://travis-ci.org/ewape/gulp-boilerplate)
[![Code Climate](https://codeclimate.com/github/ewape/gulp-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/ewape/gulp-boilerplate)

### Project setup
```sh
$ npm install
$ gulp bower
$ gulp build
```

##### Installing npm dependencies:
```sh
$ npm install <dependency-name> -D
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

##### Clean build files:
```sh
$ gulp clean
```
##### Validate HTML:
```sh
$ gulp w3cjs
```
### Templating
Nunjucks templating docs:
https://mozilla.github.io/nunjucks/templating.html

Nunjucks syntax for Sublime Text:
https://github.com/mogga/sublime-nunjucks/blob/master/Nunjucks.tmLanguage
