import 'svgxuse'
import { variables as $v } from "./helpers/variables";
import { objectFitFromIe, typicalTableWrap } from './functions/index';
import { pulseClick } from "./plugins/ripple";

$(function () {
  objectFitFromIe();
  typicalTableWrap();

  //==============Одинаковая высота элементов================

  //$('.class').matchHeight();

  pulseClick();

});


