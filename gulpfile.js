var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    react = require('gulp-react');

var paths = {
  core: [
    'cosmos.js',
    'lib/**/*.js',
    'mixins/**/*.js',
    'components/**/*.jsx'],
  demo: [
    'demo/components/**/*.jsx'
  ]
};

gulp.task('build', function() {
  // Cosmos bundle
  gulp.src(paths.core)
    .pipe(react())
    .pipe(concat('cosmos.js'))
    .pipe(gulp.dest('build'))
    .pipe(uglify())
    .pipe(rename('cosmos.min.js'))
    .pipe(gulp.dest('build'));
  // Demo bundle
  gulp.src(paths.demo)
    .pipe(react())
    .pipe(concat('demo.js'))
    .pipe(gulp.dest('build'))
    .pipe(uglify())
    .pipe(rename('demo.min.js'))
    .pipe(gulp.dest('build'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.core.concat(paths.demo), ['build']);
});

gulp.task('default', ['build', 'watch']);
