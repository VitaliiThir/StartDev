const FAVICON = {
  name: 'Web Development', // The name for your mobile app
  startImage: $.path.src.favicon, // Original image (min 512*521 px) to start from
  destination: $.path.build.favicon, // Save generated icons and config files inside this folder
  androidThemeColor: '#ffffff', // Theme color for Android app
  dataFile: './faviconData.json',
  delPath: './src/img/images/favicon/*.*',
  destHtmlPath: './build/*.html',
  iconsPath: './img/favicon/'
};

const FAVICON_DATA_FILE = './faviconData.json';

let fs = require('fs');

module.exports = function () {
  $.gulp.task('favicon', function (done) {
    $.del(FAVICON.delPath);
    $.realFavicon.generateFavicon(
        {
          masterPicture: FAVICON.startImage,
          dest: FAVICON.destination,
          iconsPath: FAVICON.iconsPath,
          design: {
            ios: {
              pictureAspect: 'noChange',
              assets: {
                ios6AndPriorIcons: false,
                ios7AndLaterIcons: false,
                precomposedIcons: false,
                declareOnlyDefaultIcon: true,
              },
            },
            desktopBrowser: {
              design: 'raw',
            },
            windows: {
              pictureAspect: 'noChange',
              backgroundColor: '#da532c',
              onConflict: 'override',
              assets: {
                windows80Ie10Tile: false,
                windows10Ie11EdgeTiles: {
                  small: false,
                  medium: true,
                  big: false,
                  rectangle: false,
                },
              },
            },
            androidChrome: {
              pictureAspect: 'shadow',
              themeColor: FAVICON.androidThemeColor,
              manifest: {
                name: FAVICON.name,
                startUrl: '/',
                display: 'standalone',
                orientation: 'notSet',
                onConflict: 'override',
                declared: true,
              },
              assets: {
                legacyIcon: false,
                lowResolutionIcons: true,
              },
            },
            safariPinnedTab: {
              pictureAspect: 'silhouette',
              themeColor: '#5bbad5',
            },
          },
          settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: true,
            readmeFile: false,
            htmlCodeFile: true,
            usePathAsIs: false,
          },
          markupFile: FAVICON.dataFile,
        }, function () {
          done();
        });
  });

  $.gulp.task('inject-favicon-markups', function () {
    return $.gulp.src([FAVICON.destHtmlPath])
        .pipe($.realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
        .pipe($.htmlBeautify({ indentSize: 2 }))
        .pipe($.gulp.dest('./build/'))
  });

  $.gulp.task('check-for-favicon-update', function (done) {
    var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
    $.realFavicon.checkForUpdates(currentVersion, function (err) {
      if (err) {
        throw err;
      }
    });
  });
};
