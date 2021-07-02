// Submit loader
import { variables as $v } from "../../vars";

export function loader(elem, options) {
  let defaultOptions = {
    elem: document.querySelector(elem),
    load_class: 'loader',
    status: Boolean,
    demo: false,
    size: '20px',
    bg_color: 'rgba(0,0,0,.7)',
    css: `
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    cursor-pointer: default;
    background-image: url(${ $v.$loader });
    background-position: center center;
    background-repeat: no-repeat;
    `,
    relative: 'relative'
  };

  options = { ...defaultOptions, ...options };

  let loader = document.createElement('div');

  loader.classList.add(options.load_class);
  loader.style.cssText = options.css;
  loader.style.backgroundSize = options.size;
  loader.style.backgroundColor = options.bg_color;


  let init = function () {
    if (options.demo) {
      demo()
    } else {
      base()
    }
  };

  let demo = function () {
    options.elem.addEventListener('click', function () {
      loaderStart();

      setTimeout(() => {
        loaderEnd()
      }, 800)
    });
  };

  let base = function () {
    if (options.status) {
      loaderStart();
    } else {
      loaderEnd()
    }
  };

  let loaderStart = function () {
    if (positionStatus()) {
      options.elem.style.position = options.relative;
      options.elem.style.pointerEvents = 'none';
      loaderAppend()
    } else {
      loaderAppend()
    }
  };

  let loaderEnd = function () {
    loader.remove();

    if (positionStatus()) {
      options.elem.style.removeProperty('position')
    }

    options.elem.style.pointerEvents = 'all';
  };

  let positionStatus = function () {
    let elemPosition = window.getComputedStyle(options.elem, null).position;

    return elemPosition !== options.relative || elemPosition !== "absolute";
  };

  let loaderAppend = function () {
    options.elem.appendChild(loader)
  };

  if (options.elem) {
    init()
  }
}
