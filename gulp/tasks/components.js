module.exports = function () {
  $.gulp.task('components', function () {
    return $.gulp.src($.path.src.components)
        .on('error', function (error) {
          console.log(`Error : ${error.message}`);
          this.emit('end');
        })
        .pipe($.rigger())
        .pipe($.uglify())
        .pipe($.cached('components'))
        .pipe($.gulp.dest($.path.build.components))
        .pipe($.browserSync.reload({
          stream: true
        }))
  });
};
