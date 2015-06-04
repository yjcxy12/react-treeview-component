var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	reactify = require('reactify'),
	react = require('gulp-react');


gulp.task('browserify', ['jsx'], function(){
	return browserify('./src/example/index.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./build'));
});
 
gulp.task('jsx', function () {
    return gulp.src('./src/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./src/'));
});

gulp.task('default', ['browserify']);