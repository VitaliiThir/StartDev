// Альтернатива свойства CSS Object-fit для броузера IE (jQuery)
export function objectFitFromIe() {
  (function ($) {
    $.fn.imageResponsive = function () {
      let imgCover = $('.img-cover');


      imgCover.css({
        'width': 'auto',
        'height': 'auto',
        'left': '50%',
        'top': '50%'
      });

      imgCover.each(function () {

        elemHeight(this);
        elemWidth(this);
        parentSize(this);
        elemHeightWidth(this);
        smallImage(this);
        elemCenter(this);

      });

      function elemHeight(el) {
        let h = $(el).height(),
            w = $(el).width();
        if (h < w) {
          $(el).css('height', '100%');
        }
      }

      function elemWidth(el) {
        let h = $(el).height(),
            w = $(el).width();

        if (h > w) {
          $(el).css('width', '100%');
        }
      }

      function elemHeightWidth(el) {
        let h = $(el).height(),
            w = $(el).width();

        if (w === h) {
          parentSize(el);
        }
      }

      function smallImage(el) {
        let ph = $(el).parent().height(),
            pw = $(el).parent().width(),
            h = $(el).height(),
            w = $(el).width();

        if (w === h && w < pw && h < ph || w !== h && w < pw && h < ph) {
          ph < pw ?
              $(el).css({
                'width': '100%',
                'height': 'auto'
              }) :
              $(el).css({
                'height': '100%',
                'width': 'auto'
              });
        }
        if (w === h && ph === pw) {
          $(el).css({
            'width': '100%',
            'height': '100%'
          });
        }
      }

      function parentSize(el) {
        let ph = $(el).parent().height(),
            pw = $(el).parent().width(),
            h = $(el).height(),
            w = $(el).width();

        if (h < ph) {
          $(el).css({
            'height': '100%',
            'width': 'auto'
          })
        }
        if (w < pw) {
          $(el).css({
            'width': '100%',
            'height': 'auto'
          })
        }
      }

      function elemCenter(el) {
        let h = $(el).height(),
            w = $(el).width();

        $(el).css({
          'margin-left': '-' + w / 100 * 50 + 'px',
          'margin-top': '-' + h / 100 * 50 + 'px'
        });
      }
    };
  }(jQuery));

  function objectFitIe() {
    let isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

    if (isIE11) {
      let imageCover = $('.img-cover');

      imageCover.imageResponsive();

      $v.$window.on('resize', function () {
        let winWidth = $(this).width();

        if (winWidth >= 1200 || winWidth >= 992 || winWidth >= 768 || winWidth >= 576 || winWidth > 375) {
          setTimeout(function () {
            imageCover.imageResponsive();
          }, 10);
        }
      });
    }
  }

  objectFitIe();
}
