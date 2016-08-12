
// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer'),
    cssnano= require('gulp-cssnano'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');


// Styles
gulp.task('styles', function() {
  return gulp.src('scss/main.scss', { style: 'expanded' })
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulp.dest('css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js", '*.html'], {
        server: {
            baseDir: "./"
        }
    });
});

// Default task
gulp.task('default', ['browser-sync'], function() {
    gulp.start('styles');
});

// Watch
gulp.task('watch', ['browser-sync'], function() {

  gulp.watch('scss/*.scss', ['styles']);

  gulp.watch('./*.html');

});
