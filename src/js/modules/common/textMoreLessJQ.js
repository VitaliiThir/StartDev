import {variables as $v} from "../../vars";

// Кнопка Подробнее / Скрыть для просмотра текста (jQuery)
export function textMoreLessJQ(block, lh, ql, btnMore, btnHidden) {

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
