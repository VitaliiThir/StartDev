// Плавный скролл к элементу при переходе на другую страницу (#anchor) (jQuery)
export function scrollAnchorAnimateUnderPageJQ(speed, timeout) {
  let myHash = location.hash;

  if (myHash[1] !== undefined) {
    setTimeout(function () {
      $('html, body').animate({ scrollTop: $(myHash).offset().top }, speed);
    }, timeout);
  }

  location.hash = '';
}
