import { typicalTableWrap, pulseClick, ntf, modal, submitButton } from './modules/';

$(function () {
  typicalTableWrap(); // Автоматическая обёртка для таблиц на типовых страницах (jQuery)
  // $('.class').matchHeight(); // Одинаковая высота элементов
  pulseClick(); // Пульс-эффект при клике (native)
  modal(); // Popup (MicroModal)
  submitButton(true); // Submit loader
});


