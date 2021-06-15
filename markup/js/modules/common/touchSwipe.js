import 'mobile-swipe-menu/dist/js/mobile-swipe-menu.min';

export function touchSwipeMenu() {
  let menuOpen = document.querySelector('.swipe-btn button'),
      menuID = 'swipe',
      menuObj = document.getElementById(menuID),
      overlay = document.querySelector('.overlay');

  if (menuObj && menuOpen) {
    let swipeMenu = new MobileSwipeMenu(`#${menuID}`, {
      mode: 'left',
      width: window.innerWidth / 1.15,
      enableBodyHook: true,
      events: {
        opened: function () {
          document.body.style.overflow = 'hidden';
          overlay.classList.add('visible')
        },
        closed: function () {
          document.body.style.removeProperty('overflow');
          overlay.classList.remove('visible')
        },
        drag: function (swipe) {}
      }
    });

    menuOpen.addEventListener('click', () => {
      swipeMenu.open();
    });
  }
}

// Repository - https://github.com/milkamil93/mobile-swipe-menu/
