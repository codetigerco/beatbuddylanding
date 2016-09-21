
// Load plugins
var gulp = require('gulp'),
      browserSync = require('browser-sync');


// Static server
gulp.task('browser-sync', function() {
    browserSync.init(["_site/css/*.css", "_site/js/*.js", '_site/**/*.html'], {
        proxy:  "localhost:4000"
    });
});

// Watch
gulp.task('watch', ['browser-sync'], function() {

  gulp.watch('_site/**/*.html');

});
