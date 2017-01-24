var flatten = require('gulp-flatten');
var gulp = require('gulp');

gulp.task('default', function (){
    return gulp.src('node_modules/**/*min.js')
    .pipe(flatten())
    .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('copyJSmap', function (){
    return gulp.src('node_modules/**/*min.js.map')
    .pipe(flatten())
    .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('copyCSS', function (){
    return gulp.src('node_modules/bootstrap/dist/css/*.css.*')
    .pipe(flatten())
    .pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('copyBSJS', function (){
    return gulp.src('node_modules/bootstrap/dist/js/*min.js')
    .pipe(flatten())
    .pipe(gulp.dest('public/javascripts/'));
});