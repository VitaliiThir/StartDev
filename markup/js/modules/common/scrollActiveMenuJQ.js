// Активные пункты менюя при скроллинге страницы до блока по #anchor (для лэндингов) (jQuery)
export function scrollActiveMenuJQ() {

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
