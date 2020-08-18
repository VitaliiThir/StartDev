module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch($.path.watch.pug, $.gulp.series('watch:init', 'pug', 'watch:pug'));
		$.gulp.watch($.path.watch.html, {usePolling: true}, $.gulp.series('html'));
		$.gulp.watch($.path.watch.sass, $.gulp.series('sass:development'));
		$.gulp.watch($.path.watch.js, {usePolling: true}, $.gulp.series('js:development'));
		$.gulp.watch($.path.watch.fonts, {usePolling: true}, $.gulp.series('fonts'));
		$.gulp.watch($.path.watch.img, {usePolling: true}, $.gulp.series('img:development'));
		$.gulp.watch($.path.watch.svg, {usePolling: true}, $.gulp.series('svg'));
		$.gulp.watch($.path.watch.libs, {usePolling: true}, $.gulp.series('libs'));
	})
};
