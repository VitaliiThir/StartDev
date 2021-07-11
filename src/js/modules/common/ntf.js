import { variables as $v } from "../../vars";
import { trigger } from "./trigger";

// Окно уведомления при успешной / неуспешной отправке данных из форм (native)
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
    trigger(close, 'click');
  }, delay ? delay : $v.$ntfSpeed);
}
