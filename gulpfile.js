'use strict';

global.$ = {
    gulp: require('gulp'),
    fileinclude: require('gulp-file-include'),
    scss: require('gulp-sass'),
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
            pug: 'markup/pug/pages/*.pug',
            html: 'markup/html/*.html',
            scss: 'markup/scss/*.scss',
            js: 'markup/js/*.js',
            fonts: 'markup/fonts/**/*.*',
            img: 'markup/img/images/**/*.*',
            svg: 'markup/img/sprite/*.svg',
            libs: 'markup/js/libs/*.js'
        },
        build: {
            pug: 'build/',
            html: 'build/',
            css: 'build/css/',
            js: 'build/js/',
            fonts: 'build/fonts/',
            img: 'build/img/',
            libs: 'build/js/libs/'
        },
        isWatchMode: false,
        watch: {
            pug: [
                'markup/pug/pages/*.pug',
                'markup/pug/layout/**/*.pug',
                'markup/pug/mixins/**/*.pug',
                'markup/pug/components/**/*.pug'
            ],
            html: 'markup/html/*.html',
            scss: [
                'markup/scss/*.scss',
                'markup/scss/components/**/*.scss',
                'markup/scss/mixins/**/*.scss',
                'markup/scss/global/*.scss',
                'markup/scss/helpers/*.scss',
                'markup/scss/plugins/*.scss'
            ],
            js: 'markup/js/**/*.js',
            img: 'markup/img/images/**/*.*',
            svg: 'markup/img/sprite/*.svg',
            fonts: 'markup/fonts/**/*.*'
        }
    }
};

$.emitty.language({
    extensions: ['.pug'],
    parser: require('@emitty/language-pug').parse
});

$.scss.compiler = require('node-sass');

$.path.tasks.forEach((taskPath) => require(taskPath)());

$.gulp.task('common', $.gulp.series('clean', $.gulp.parallel('pug', 'html', 'fonts', 'svg', 'libs')));

$.gulp.task('dev', $.gulp.series('scss:development', 'js:development', 'img:development',));

$.gulp.task('build', $.gulp.series('common', $.gulp.parallel('scss:production', 'js:production', 'img:production',),
    function completion(done) {
        done();
        process.exit();
    }
));

$.gulp.task('default', $.gulp.series('common', $.gulp.parallel('dev'), $.gulp.parallel('watch', 'server')));
