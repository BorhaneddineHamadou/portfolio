'use strict'
var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
const { src } = require('gulp');

gulp.task('test', function(){
   console.log('This only to test gulp');
});

gulp.task('copyfile', function(){
    return gulp.src('*.html')
           .pipe(gulp.dest('dist'));
});

gulp.task('cssconcat', function(){
    return gulp.src('css/*.css')
           .pipe(concat('main.css'))
           .pipe(gulp.dest('dist/css'))
});

gulp.task('css', function(){
   return gulp.src('css/*.css')
          .pipe(concat('main.css'))
          .pipe(prefix('last 2 versions'))
          .pipe(gulp.dest('dist/css'))
});