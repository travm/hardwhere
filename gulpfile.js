var gulp = require('gulp');
var rename = require('gulp-rename');
var myth = require('gulp-myth');

gulp.task('compile', function() {
    gulp.src('./app/assets/css/main.css')
        .pipe(rename('main-prod.css'))
        .pipe(myth())
        .pipe(gulp.dest('./app/assets/css'));
});

// Default Task
gulp.task('default', function(){
    gulp.run('compile');

    // Watch For Changes To Our JS
    gulp.watch('./app/assets/css/main.css', function(){
        gulp.run('compile');
    });
});