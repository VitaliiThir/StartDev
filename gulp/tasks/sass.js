module.exports = function () {

  $.gulp.task('sass:development', function () {
    return $.gulp.src($.path.src.sass)

        .pipe($.sourcemaps.init())
        .pipe($.sass({ outputStyle: 'compact' }).on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe($.sourcemaps.write('./'))
        .pipe($.gulp.dest($.path.build.css))
        .pipe($.browserSync.stream())
  });

  $.gulp.task('sass:production', function () {
    return $.gulp.src($.path.src.sass)
        .pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe($.stripCss())
        .pipe($.gulp.dest($.path.build.css))
  });

};
