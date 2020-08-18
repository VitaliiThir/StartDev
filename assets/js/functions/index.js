import { variables as $v } from '../helpers/variables';

export function typicalTableWrap() {
  let typicalTableWrap = '<div class="typical-table-wrap"></div>';

  $('.typical').find('table').wrap(typicalTableWrap);
}

export function sliderSlidesCounter(slider, counterBlock) {
  slider.on(`init reInit`, function (event, slick) {
    counterBlock.html(
        '<div>' + '<span>' + 0 + 1 + '</span>' + ' / ' + '<span>' + (slick.slideCount <= 9 ? 0 : '') + slick.slideCount + '</span>' + '</div>'
    );
  });

  slider.on(`afterChange`, function (event, slick, currentSlide) {
    counterBlock.html(
        '<div>' + '<span>' + (currentSlide <= 8 ? 0 : '') + (currentSlide + 1) + '</span>' + ' / ' + '<span>' + (slick.slideCount <= 9 ? 0 : '') + slick.slideCount + '</span>' + '</div>'
    );
  });
}

export function scrollBtn() {
  let scrollBtn = $('.scroll-button');

  $v.$window.scroll(function () {
    if ($(this).scrollTop() > 300) {
      scrollBtn.addClass('active');
    } else {
      scrollBtn.removeClass('active');
    }
  });

  $(scrollBtn).on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
  });
}

export function scrollAnimate(speed) {
  let anchor = $('.anchor');

  anchor.on("click", handler);

  function handler(event) {
    let hash = event.target.hash;

    if (hash) {
      let tag = $(hash);
      if ($(hash).length) {
        let offset = tag.offset().top;
        $('html, body').stop().animate({ scrollTop: offset }, speed);
      }
    }
  }
}

export function scrollAnimateUnderPage(speed, timeout) {
  let myHash = location.hash;

  if (myHash[1] !== undefined) {
    setTimeout(function () {
      $('html, body').animate({ scrollTop: $(myHash).offset().top }, speed);
    }, timeout);
  }

  location.hash = '';
}

export function scrollActiveMenu() {

  let headerLink = $v.header.find('nav li');

  headerLink.each(function () {
    let selector = $(this).children().attr('href');
    let windowTop = $(window).scrollTop();
    let sectionTop = $(selector).offset().top;
    if (windowTop > sectionTop - 100) {
      headerLink.removeClass('selected').filter(this).addClass('selected');
    }
  });
}

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
        let winWidth = $v.$window.width();

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

export function textMore(block, lh, ql, btnMore, btnHidden) {

  textMoreEvents();

  $v.$window.on('resize', function () {
    textMoreEvents();
  });

  function textMoreEvents() {
    let height = lh * ql;
    $(block).each(function () {
      let realHeight = $(this).height();

      if (realHeight > height) {
        $(this).css({
          'height': height + 'px',
          'transition': 'height 0.2s',
          'overflow': 'hidden'
        });
        $(this).next().addClass('active').find(btnMore).addClass('visible');

        $(this).next().find(btnMore).on('click', function () {
          $(this).parent().css('overflow', 'hidden').prev(block).css('height', realHeight + 'px').removeClass('hidden');
          $(this).removeClass('visible').next(btnHidden).addClass('visible');
        });

        $(this).next().find(btnHidden).on('click', function () {
          $(this).parent().css('overflow', 'visible').prev(block).css('height', height + 'px').addClass('hidden');
          $(this).removeClass('visible').prev(btnMore).addClass('visible');
        })
      }
    })
  }
}

export function citySelectActions() {
  let cityInput = $('#x-user-city');

  if (cityInput.length >= 1) {
    cityInput.fias({
      token: 'Tt4t74ARSTQEsA2DBKfZD5FEyfzbGYE4',
      type: $.fias.type.city,
      verify: true,
      url: 'https://kladr-api.com/api.php'
    });
  }
}

export function supportActions() {
  let support = $('.tech-support-block'),
      supportItem = $('.x-user-cause li, .x-user-cause-sup li'),
      submit = $('.contacts-submit');

  supportItem.each(function () {
    if ($(this).text() === 'Техническая поддержка') {
      $(this).addClass('tech-support')
    } else if ($(this).text() === 'Сотрудничество') {
      $(this).addClass('cooperation')
    }
  });

  supportItem.on('click', function () {

    if ($(this).hasClass('tech-support')) {
      support.addClass('visible');
    } else {
      support.removeClass('visible')
    }

    if ($(this).hasClass('cooperation')) {
      submit.removeClass('active');
      $('.contacts-submit[value="info"]').addClass('active');
    } else if ($(this).hasClass('tech-support')) {
      submit.removeClass('active');
      $('.contacts-submit[value="support"]').addClass('active');
    } else {
      submit.removeClass('active');
      $('.contacts-submit[value="sale"]').addClass('active');
    }
  })

}

export function targetClickEl() {
  $(document).mouseup(function (e) {
    if (!$('selector').is(e.target) && $('selector').has(e.target).length === 0) {
      //Actions...
    }
  });
}
