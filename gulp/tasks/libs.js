module.exports = function () {
  $.gulp.task('libs', function () {
    return $.gulp.src($.path.src.libs, {since: $.gulp.lastRun('libs')})
        .on('error', function (error) {
          console.log(`Error : ${error.message}`);
          this.emit('end');
        })
        .pipe($.rigger())
        .pipe($.uglify())
        .pipe($.cached('libs'))
        .pipe($.gulp.dest($.path.build.libs))
        .pipe($.browserSync.reload({
          stream: true
        }))
  });
};
