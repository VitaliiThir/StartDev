'use strict';

global.$ = {
    gulp: require('gulp'),
    fileinclude: require('gulp-file-include'),
    sass: require('gulp-sass'),
    sourcemaps: require('gulp-sourcemaps'),
    autoprefixer: require('gulp-autoprefixer'),
    browserSync: require('browser-sync').create(),
    uglify: require('gulp-uglify'),
    del: require('del'),
    stripCss: require('gulp-strip-css-comments'),
    imagemin: require('gulp-imagemin'),
    cache: require('gulp-cache'),
    rigger: require('gulp-rigger'),
    dependents: require('gulp-dependents'),

    through2: require('through2'),

    pugInheritance: require('gulp-pug-inheritance'),
    changed: require('gulp-changed'),
    gulpif: require('gulp-if'),
    filter: require('gulp-filter'),
    debug: require('gulp-debug'),

    pug: require('gulp-pug'),
    cached: require('gulp-cached'),
    jpegRecompress: require('imagemin-jpeg-recompress'),
    pngQuant: require('imagemin-pngquant'),
    svgSprite: require('gulp-svg-sprite'),
    replace: require('gulp-replace'),
    svgmin: require('gulp-svgmin'),
    cheerio: require('gulp-cheerio'),
    htmlBeautify: require('gulp-beautify-code'),
    aliases: require('gulp-style-aliases'),
    webpack: require('webpack'),
    webpackStream: require('webpack-stream'),
    emitty: require('@emitty/core').configure(),
    state: {
        isWatchMode: false,
        watch: {
            pug: undefined
        }
    },
    path: {
        tasks: require('./gulp/config/tasks.js'),
        src: {
            pug: 'pages/*.pug',
            html: 'html/*.html',
            sass: 'assets/sass/*.scss',
            js: 'assets/js/*.js',
            fonts: 'assets/fonts/**/*.*',
            img: 'assets/img/images/**/*.*',
            svg: 'assets/img/sprite/*.svg',
            libs: 'js-libs/*.js'
        },
        build: {
            pug: 'build/',
            html: 'build/',
            css: 'build/css/',
            js: 'build/js/',
            fonts: 'build/fonts/',
            img: 'build/img/',
            libs: 'build/js-libs/'
        },
        isWatchMode: false,
        watch: {
            pug: ['pages/*.pug', 'layout/**/*.pug', 'mixins/**/*.pug', 'components/**/*.pug'],
            html: 'html/*.html',
            sass: ['assets/sass/*.scss','assets/sass/components/**/*.scss', 'assets/sass/mixins/**/*.scss', 'assets/sass/global/*.scss', 'assets/sass/helpers/*.scss', 'assets/sass/plugins/*.scss'],
            js: 'assets/js/**/*.js',
            img: 'assets/img/images/**/*.*',
            svg: 'assets/img/sprite/*.svg',
            fonts: 'assets/fonts/**/*.*',
            libs: 'libs/**/*.js'
        }
    }
};

$.emitty.language({
    extensions: ['.pug'],
    parser: require('@emitty/language-pug').parse
});

$.sass.compiler = require('node-sass');

$.path.tasks.forEach((taskPath) => require(taskPath)());

$.gulp.task('common', $.gulp.series('clean', $.gulp.parallel('pug', 'html', 'fonts', 'svg', 'libs')));

$.gulp.task('dev', $.gulp.series('sass:development', 'js:development', 'img:development',));

$.gulp.task('build', $.gulp.series('common', $.gulp.parallel('sass:production', 'js:production', 'img:production',),
    function completion(done) {
        done();
        process.exit();
    }
));

$.gulp.task('default', $.gulp.series('common', $.gulp.parallel('dev'), $.gulp.parallel('watch', 'server')));
