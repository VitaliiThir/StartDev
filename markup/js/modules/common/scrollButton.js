import {variables as $v } from "../../vars";

// Скроллинг страницы при клике на кнопку
export function scrollButton(elem, options) {
  let defaultOptions = {
    btn: document.querySelector(elem),
    active_class: 'active',
    scroll_class: 'btn-scrolled',
    _window: $v.$window
  };

  options = { ...defaultOptions, ...options };

  let init = function() {
    scrollActions();
    clickActions();
  };

  let scrollActions = function() {
    options._window.onscroll = function () {
      if ($(options._window).scrollTop() > 300) {
        options.btn.classList.add(options.active_class);
        options.btn.classList.add(options.scroll_class);
      } else {
        options.btn.classList.remove(options.active_class);
        options.btn.classList.remove(options.scroll_class);
      }
    };
  };

  let clickActions = function() {
    options.btn.addEventListener('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
    });
  };

  if (options.btn) {
    return init()
  }
}
