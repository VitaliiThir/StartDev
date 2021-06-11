import {variables as $v } from "../../vars";

// Скроллинг страницы при клике на кнопку (jQuery)
export function scrollButton() {
  let scrollBtn = document.querySelector('.scroll-button');

  $v.$window.onscroll = function () {
    let offsetTop = this.window.pageYOffset;

    offsetTop > 300 ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active');
  };

}
