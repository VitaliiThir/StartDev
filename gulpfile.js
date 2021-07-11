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
  realFavicon: require('gulp-real-favicon'),
  state: {
    isWatchMode: false,
    watch: {
      pug: undefined
    }
  },
  path: {
    tasks: require('./gulp/config/tasks.js'),
    src: {
      pug: 'src/pug/pages/*.pug',
      html: 'src/html/*.html',
      scss: 'src/scss/*.scss',
      js: 'src/js/index.js',
      fonts: 'src/fonts/**/*.*',
      img: 'src/img/images/**/*.*',
      svg: 'src/img/sprite/*.svg',
      libs: 'src/js/libs/*.js',
      components: 'src/js/components/*.js',
      favicon: 'src/favicon/favicon.svg',
    },
    build: {
      pug: 'build/',
      html: 'build/',
      css: 'build/css/',
      js: 'build/js/',
      fonts: 'build/fonts/',
      img: 'build/img/',
      libs: 'build/js/libs/',
      components: 'build/js/components/',
      favicon: 'src/img/images/favicon/'
    },
    isWatchMode: false,
    watch: {
      pug: [
        'src/pug/pages/*.pug',
        'src/pug/layout/**/*.pug',
        'src/pug/mixins/**/*.pug',
        'src/pug/components/**/*.pug',
        'src/pug/templates/**/*.pug'
      ],
      html: 'src/html/*.html',
      scss: [
        'src/scss/*.scss',
        'src/scss/components/**/*.scss',
        'src/scss/mixins/**/*.scss',
        'src/scss/global/*.scss',
        'src/scss/helpers/*.scss',
        'src/scss/plugins/*.scss'
      ],
      js: 'src/js/**/*.js',
      img: 'src/img/images/**/*.*',
      svg: 'src/img/sprite/*.svg',
      fonts: 'src/fonts/**/*.*'
    }
  }
};

$.emitty.language({
  extensions: ['.pug'],
  parser: require('@emitty/language-pug').parse
});

$.scss.compiler = require('node-sass');

$.path.tasks.forEach((taskPath) => require(taskPath)());

$.gulp.task('common', $.gulp.series('clean', $.gulp.parallel('pug', 'html', 'fonts', 'svg', 'libs', 'components')));

$.gulp.task('dev', $.gulp.series('scss:development', 'js:development', 'img:development'));

$.gulp.task('build', $.gulp.series('common', $.gulp.parallel('scss:production', 'js:production', 'img:production', 'inject-favicon-markups'),
    function completion(done) {
      done();
      process.exit();
    }
));

$.gulp.task('default', $.gulp.series('common', $.gulp.parallel('dev'), $.gulp.parallel('watch', 'server')));
