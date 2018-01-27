var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sync = require('browser-sync').create();

var processors = [
  autoprefixer
];

// TODO: BUILD

gulp.task('font', function() {
    return gulp.src('app/fonts/**/*.otf')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('font', function() {
    return gulp.src('app/fonts/**/*.otf')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('scss', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/css'))
        .pipe(sync.stream());
});

gulp.task('sync', ['scss'], function() {
    sync.init({
        server: './'
    })

    gulp.watch("app/scss/**/*.scss", ['scss']);
});

gulp.task('default', ['sync'], function() {
});
