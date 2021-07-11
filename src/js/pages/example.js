import 'jquery-lazy/jquery.lazy.min';
import { menu } from "../modules/common/swipeMenu";
import { loader } from '../modules/common/loader';
import { pulseClick } from "../modules/common/pulseClick";
import { modal } from "../modules/common/modal";
import { typicalTableWrap } from "../modules/common/typicalTableWrap";
import { scrollAnchorAnimate } from "../modules/common/scrollAnchorAnimate";
import { scrollButton } from "../modules/common/scrollButton";
import { getBySelectors } from "../modules/common/getElement";
import { formValidationExample } from "../modules/validation/example";

$(function () {
  let popup = getBySelectors('.modal'),
      lazy = $('.lazy'),
      phone_mask = '.phone-mask';

  typicalTableWrap();

  menu('.nav', { bar: '.swipe-btn' });
  scrollButton('.scroll-button');
  scrollAnchorAnimate(0.4);
  formValidationExample(true);

  if (phone_mask.length) {
    $(".phone-mask").inputmask("+7 (999) 999-99-99");
  }
  pulseClick();

  lazy.lazy();

  if (popup.length) {
    modal();
  }

  loader('.typical .dev-btn-submit', { demo: true });

});

/**
 * Работа плагина для определения одинаковой высоты элементов.
 * @data-match-height="heading" - Одинаковая высота одиночных элементов.
 * @data-match-height-group="group" - Оберните вокруг группы элементов, чтобы они совпадали отдельно от других элементов с тем же именем.
 * @data-match-height-enable="(min-width: 768px)" - Включить определение высоты в определенном брейк-пойнте.
 * @data-match-height-disable="(max-width: 767px)" - Отключите высоту матча в определенном брейк-пойнте.
 * */


