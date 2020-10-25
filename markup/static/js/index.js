import { variables as $v } from "./vars/common";
import { objectFitFromIe, typicalTableWrap, pulseClick } from './modules/common';

$(function () {
  objectFitFromIe();
  typicalTableWrap();

  //==============Одинаковая высота элементов================
  //$('.class').matchHeight();

  pulseClick();

});


