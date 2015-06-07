var gulp = require('gulp'),
	concat = require('gulp-concat'),
	react = require('gulp-react')
	uglify = require('gulp-uglify')
	minifyCss = require('gulp-minify-css')
	rename = require('gulp-rename');

var files = [
	'./src/Tree/intro.js',
	'./src/Tree/Treenode.js',
	'./src/Tree/Treeview.js',
	'./src/Tree/outro.js'
];
 
gulp.task('jsx', function () {
    return gulp.src('./src/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./src/'));
});

gulp.task('concat', ['jsx'], function () {
	var intro = gulp.src(files)
	.pipe(concat('react-tree.js'));
	return intro.pipe(gulp.dest('./build/'));
});

gulp.task('minify', ['concat'], function () {
	gulp.src('./build/*.css')
		.pipe(minifyCss())
		.pipe(rename({extname: '.min.css'}))
		.pipe(gulp.dest('./build/'));
	gulp.src('./build/*.js')
		.pipe(uglify())
		.pipe(rename({extname: '.min.js'}))
		.pipe(gulp.dest('./build/'));
})