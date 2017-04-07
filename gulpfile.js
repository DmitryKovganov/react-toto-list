'use strict';

var gulp = require('gulp'),
    importCss = require('gulp-import-css'),
    prefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-clean-css');

var path = {
    build: {
        css: 'public/css',
        fonts: 'public/fonts'
    },
    src: {
        style: 'src/css/**/*.css',
        fonts: 'src/fonts/**/*.*'
    }
};

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(prefixer())
        .pipe(importCss())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'style:build',
    'fonts:build'
]);