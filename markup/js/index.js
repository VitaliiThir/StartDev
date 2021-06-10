import 'lazysizes/lazysizes.min';
import MatchHeight from '@tannerhodges/match-height';
import { typicalTableWrap, pulseClick, modal, submitButton } from './modules/';

document.addEventListener('DOMContentLoaded', function(){
  //typicalTableWrap(); // Автоматическая обёртка для таблиц на типовых страницах (jQuery)
  pulseClick(); // Пульс-эффект при клике (native)
  modal(); // Popup (MicroModal)
  submitButton(true); // Submit loader
});


