var gulp = require('gulp');
var myth = require('gulp-myth');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('styles', function() {
    gulp.src('./app/assets/css/*.css')
        .pipe(concat('app.css'))
        .pipe(myth())
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
    gulp.src('./app/**/*.js')
        .pipe(jshint())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist'));
});

// Default Task
gulp.task('default', function(){
    gulp.run('styles', 'scripts');

    // Watch For Changes To Our JS
    gulp.watch('./app/assets/css/*.css', function(){
        gulp.run('styles');
    });

    gulp.watch('./app/**/*.js', function() {
        gulp.run('scripts');
    });
});