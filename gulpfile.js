var gulp = require('gulp'),
    exists = require('path-exists').sync,
    autoprefixer = require('gulp-autoprefixer'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    mainBowerFiles = require('main-bower-files'),
    autoprefixerOptions = {
        browsers: ['ie >= 10', 'android >= 4.1']
    };

gulp.task('default', ['watch']);
gulp.task('build', ['styles', 'scripts-prod', 'images', 'bower-copy-min']);

gulp.task('watch', function() {
    gulp.watch('./src/js/**/*.js', ['scripts']);
    gulp.watch('./src/scss/**/*.scss', ['styles']);
    gulp.watch('./src/images/**/*.{jpg,jpeg,png,gif,svg}', ['images']);
    gulp.watch('./src/html/**/*.html', ['fileinclude']);
    gulp.watch('bower_components/**/*', ['bower-copy-min']);
    livereload.listen();
    gulp.watch(['./dist/**', '*.html']).on('change', livereload.changed);
});

gulp.task('fileinclude', function() {
  gulp.src(['./src/html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      context: {
        jquery: false
      }
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compact'
        }).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify({
            message: 'Styles task complete'
        }));
});

gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('script.min.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});

gulp.task('scripts-prod', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('script.min.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({
            message: 'Scripts production task complete'
        }));
});

gulp.task('images', function() {
    return gulp.src('./src/images/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('./dist/images'))
        .pipe(notify({
            message: 'Images task complete'
        }));
});

gulp.task('bower-copy-min', function() {
    console.log(mainBowerFiles());
    var bowerWithMin = mainBowerFiles().map(function(path, index, arr) {
        var newPath = path.replace(/.([^.]+)$/g, '.min.$1');
        return exists(newPath) ? newPath : path;
    });
    gulp.src(bowerWithMin).pipe(gulp.dest('./dist/vendor/'));
});