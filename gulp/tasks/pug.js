module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src($.path.src.pug)

        .pipe($.gulpif($.state.isWatchMode, getFilter('pug')))
        .pipe($.debug())

        .pipe($.pug('pug'))

        .on('error', function (error) {
          console.log(`Error : ${error.message}`);
          this.emit('end');
        })

        .pipe($.htmlBeautify({ indentSize: 2 }))
        .pipe($.gulp.dest($.path.build.pug))
        .on('end', $.browserSync.reload)
  });
};

$.gulp.task('watch:pug', () =>
    $.gulp.watch($.path.watch.pug, $.gulp.series('pug'))
        .on('all', (event, changed) => {
          $.state.watch.pug = changed;
        })
);

$.gulp.task('watch:init', (done) => {
  $.state.isWatchMode = true;

  done();
});

function getFilter(taskName) {
  return $.through2.obj(function (file, _encoding, callback) {
    $.emitty.filter(file.path, $.state.watch[taskName]).then((result) => {
      if (result) {
        this.push(file);
      }

      callback();
    });
  });
}
