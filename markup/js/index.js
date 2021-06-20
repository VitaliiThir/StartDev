import 'jquery-lazy/jquery.lazy.min'
import { variables as $v } from "./vars";
import { menu } from "./modules/common/swipeMenu";
import { phoneMask } from "./modules/common/phoneMask";
import { loader } from './modules/common/submitButton';
import { pulseClick } from "./modules/common/pulseClick";
import { modal } from "./modules/common/modal";
import { typicalTableWrap } from "./modules/common/typicalTableWrap";
import { scrollAnchorAnimate } from "./modules/common/scrollAnchorAnimate";
import { scrollButton } from "./modules/common/scrollButton";
import { getBySelector, getBySelectors, getById } from "./modules/common/getElement";

$(function () {
  let popup = getBySelectors('.modal'),
      lazy = $('.lazy');

  typicalTableWrap();

  menu('.nav', {bar: '.swipe-btn button'});
  scrollButton('.scroll-button');
  scrollAnchorAnimate(0.4);
  phoneMask();
  pulseClick();

  lazy.lazy();

  if (popup.length) {
    modal();
  }

  loader('.dev-btn-submit', { demo: true });

});

/**
 * Работа плагина для определения одинаковой высоты элементов.
 * @data-match-height="heading" - Одинаковая высота одиночных элементов.
 * @data-match-height-group="group" - Оберните вокруг группы элементов, чтобы они совпадали отдельно от других элементов с тем же именем.
 * @data-match-height-enable="(min-width: 768px)" - Включить определение высоты в определенном брейк-пойнте.
 * @data-match-height-disable="(max-width: 767px)" - Отключите высоту матча в определенном брейк-пойнте.
 * */


