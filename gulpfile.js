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
            pug: 'markup/pages/*.pug',
            html: 'markup/html/*.html',
            scss: 'markup/static/scss/*.scss',
            js: 'markup/static/js/*.js',
            fonts: 'markup/static/fonts/**/*.*',
            img: 'markup/static/img/images/**/*.*',
            svg: 'markup/static/img/sprite/*.svg',
            libs: 'markup/static/js/global/**/*.js'
        },
        build: {
            pug: 'build/',
            html: 'build/',
            css: 'build/css/',
            js: 'build/js/',
            fonts: 'build/fonts/',
            img: 'build/img/',
            libs: 'build/global-js/'
        },
        isWatchMode: false,
        watch: {
            pug: [
                'markup/pages/*.pug',
                'markup/layout/**/*.pug',
                'markup/mixins/**/*.pug',
                'markup/components/**/*.pug'
            ],
            html: 'html/*.html',
            scss: [
                'markup/static/scss/*.scss',
                'markup/static/scss/components/**/*.scss',
                'markup/static/scss/mixins/**/*.scss',
                'markup/static/scss/global/*.scss',
                'markup/static/scss/helpers/*.scss',
                'markup/static/scss/plugins/*.scss'
            ],
            js: 'markup/static/js/**/*.js',
            img: 'markup/static/img/images/**/*.*',
            svg: 'markup/static/img/sprite/*.svg',
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
