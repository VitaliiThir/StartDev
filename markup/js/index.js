import 'lazysizes/lazysizes.min';
import MatchHeight from '@tannerhodges/match-height';
import { touchSwipe } from "./modules/common/touchSwipe";
import { phoneMask } from "./modules/common/phoneMask";
import { submitButton } from './modules/common/submitButton';
import { pulseClick } from "./modules/common/pulseClick";
import { modal } from "./modules/common/modal";
import { typicalTableWrap } from "./modules/common/typicalTableWrap";
import { scrollAnimate } from "./modules/common/scrollAnimate";
import { scrollButton } from "./modules/common/scrollButton";

document.addEventListener('DOMContentLoaded', function () {
  typicalTableWrap();
  touchSwipe();
  scrollButton();
  scrollAnimate(0.4);
  phoneMask();
  pulseClick();
  modal();
  submitButton(true);
});


