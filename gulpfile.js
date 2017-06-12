var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');

gulp.task('autoprefix - плагин', function () {
    return gulp.src('test.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});

gulp.task('nano ', function () {
    return gulp.src('css/test.css')
        .pipe(cssnano())
        .pipe(gulp.dest('css/'));
});