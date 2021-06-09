import { variables as $v } from "./vars/global";
import { typicalTableWrap, pulseClick, ntf } from './modules/';

$(function () {

  typicalTableWrap();

  MicroModal.init({
    onShow: modal => {},
    onClose: modal => {},
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close',
    openClass: 'is-open',
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
  });

  // $('.class').matchHeight(); // Равная высота
  pulseClick();

});


