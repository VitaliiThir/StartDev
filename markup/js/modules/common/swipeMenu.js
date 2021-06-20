import { variables as $v } from "../../vars";
import { getBySelector, createElement } from "./getElement";

export function menu(elem, options) {
  let defaultOptions = {
    elem: $(elem),
    elem_class: elem,
    nav_active_class: 'active',
    bar: '.bar',
    close: '.mob-close',
    overlay: createElement('div'),
    overlay_class: 'overlay',
    overlay_visible: 'visible',
    overlay_close: true,
    swipe_direction: 'left'
  };

  options = { ...defaultOptions, ...options };

  function init() {
    options.overlay.classList.add(options.overlay_class);
    $v.$body.appendChild(options.overlay);
    swipeActions();
    menuOn();
    menuOff()
  }

  function swipeActions() {
    $(options.overlay_close ? $('.' + options.overlay_class + ', ' + options.elem_class) : options.elem).swipe({
      swipe: function (event, direction) {
        if (direction === options.swipe_direction) {
          $(options.close).trigger('click')
        }
      },
      allowPageScroll: "vertical"
    });
  }

  function menuOn() {
    getBySelector(options.bar).addEventListener('click', function () {
      getBySelector(options.elem_class).classList.add(options.nav_active_class);
      options.overlay.classList.add(options.overlay_visible);
      $v.$body.classList.add('overflow')
    });
  }

  function menuOff() {
    getBySelector(options.close).addEventListener('click', function () {
      getBySelector(options.elem_class).classList.remove(options.nav_active_class);
      $v.$body.classList.remove('overflow');
      options.overlay.classList.remove(options.overlay_visible)
    })
  }

  return init()
}
