gulp.task('js', function() {
    gulp.src(['ng/module.js','ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'));
});