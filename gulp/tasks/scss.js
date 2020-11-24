module.exports = function () {

  $.gulp.task('scss:development', function () {
    return $.gulp.src($.path.src.scss)

        .pipe($.aliases({
          "nm": "./node_modules"
        }))
        .pipe($.sourcemaps.init())
        .pipe($.scss({ outputStyle: 'compact' }).on('error', $.scss.logError))
        .pipe($.autoprefixer())
        .pipe($.sourcemaps.write('./'))
        .pipe($.gulp.dest($.path.build.css))
        .pipe($.browserSync.stream())
  });

  $.gulp.task('scss:production', function () {
    return $.gulp.src($.path.src.scss)
        .pipe($.scss({ outputStyle: 'compressed' }).on('error', $.scss.logError))
        .pipe($.autoprefixer())
        .pipe($.stripCss())
        .pipe($.gulp.dest($.path.build.css))
  });

};
