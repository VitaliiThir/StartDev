import { variables as $v } from '../vars/global';

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
    let windowTop = $($v.$window).scrollTop();
    let sectionTop = $(selector).offset().top;
    if (windowTop > sectionTop - 100) {
      headerLink.removeClass('selected').filter(this).addClass('selected');
    }
  });
}

export function pulseClick() {

  [].map.call(document.querySelectorAll('.ripple'), el=> {
    el.addEventListener('click',e => {
      e = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop;
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
    })
  })

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

export function textMoreLess(block, lh, ql, btnMore, btnHidden) {

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

export function targetClickEl() {
  $(document).mouseup(function (e) {
    if (!$('selector').is(e.target) && $('selector').has(e.target).length === 0) {
      //Actions...
    }
  });
}

export function inputPhoneMask() {
  let input = $('input[name="user_phone"]');

  input.attr('placeholder', '+7(___) ___-__-__');

  input.one('click', function(){
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-99-99");

  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      let range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
}

export function ntfOld(header, main, delay, error) {
  let ntf = '.ntf',
      mh = '.ntf-header',
      mm = '.ntf-main',
      close = '.ntf-close';

  $(mh).html(header);
  $(mm).html(main);

  if (error) {
    $(ntf).addClass('is-open').addClass('ntf-error');
  } else {
    $(ntf).addClass('is-open')
  }

  $(close).on('click', function () {
    $(ntf).removeClass('is-open')
  });

  setTimeout(() => {
    $(close).trigger('click');
  }, delay ? delay : $v.$ntfSpeed)
}

export function ntf(header, main, delay, error) {
  let body = document.querySelector('body'),
      div = document.createElement('div');

  div.innerHTML += '<div class="ntf-container"><div class="ntf-header"></div><div class="ntf-main"></div><div class="ntf-foo"><div class="ntf-close"><svg version="1.1" id="ntf-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 192.701 192.701" style="enable-background:new 0 0 192.701 192.701;" xml:space="preserve"><path d="M20.746,104.169l75.61-74.528l75.61,74.54c4.74,4.704,12.439,4.704,17.179,0s4.74-12.319,0-17.011l-84.2-82.997 c-4.559-4.511-12.608-4.535-17.191,0l-84.2,83.009c-4.74,4.692-4.74,12.319,0,17.011C8.307,108.873,16.006,108.873,20.746,104.169 z"/><path d="M104.946,88.373c-4.559-4.511-12.608-4.535-17.191,0l-84.2,82.997c-4.74,4.704-4.74,12.319,0,17.011 c4.74,4.704,12.439,4.704,17.179,0l75.622-74.528l75.61,74.54c4.74,4.704,12.439,4.704,17.179,0s4.74-12.319,0-17.011 L104.946,88.373z"/></svg></div><div data-ntf-open></div></div></div>';
  div.classList.add('ntf');
  body.appendChild(div);

  let ntf = document.querySelector('.ntf'),
      mh = document.querySelector('.ntf-header'),
      mm = document.querySelector('.ntf-main'),
      close = document.querySelector('.ntf-close');

  mh.innerHTML = header;
  mm.innerHTML = main;

  setTimeout(() => {
    if (error) {
      ntf.classList.add('is-open');
      ntf.classList.add('ntf-error');
    } else {
      ntf.classList.add('is-open');
    }
  }, 50);

  close.addEventListener('click', function () {
    ntf.classList.remove('is-open');
    ntf.addEventListener('transitionend', function () {
      ntf.remove()
    }, false);
  });

  setTimeout(() => {
    myTrigger(close, 'click');
  }, delay ? delay : $v.$ntfSpeed);
}

export function myTrigger(elem, eventType) {
  let event = new Event(eventType);
  elem.dispatchEvent(event);
}

export function nativeScrollAnimate(speed = 1) {
  let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
      V = speed;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      let w = window.pageYOffset,  // производим прокрутка прокрутка
          hash = this.href.replace(/[^#]*(.*)/, '$1'),  // к id элемента, к которому нужно перейти
          t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
          start = null;
      requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
            r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r !== w + t) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash  // URL с хэшем
        }
      }
    }, false);
  }
}
