import 'mobile-swipe-menu/dist/js/mobile-swipe-menu.min';

export function touchSwipe() {
  let menuOpen = document.querySelector('.swipe-btn button');

  let swipeMenu = new MobileSwipeMenu('#swipe', {
    mode: 'left'
  });

  menuOpen.addEventListener('click', function () {
    swipeMenu.open();
  });
}
