import { variables as $v } from "../../vars";
import { loader } from "../common/loader";
import {ntf} from "../common/ntf";

export function formValidationExample($example) {
  let form = $('#form-example'),
      example = function() {
        loader('#form-example .dev-btn-submit', {status: true});

        setTimeout(() => {
          loader('#form-example .dev-btn-submit', {status: false});
          ntf('Сообщение отправлено!', 'Оператор свяжется с вами в ближайшее время.');
          form.get(0).reset()
        }, 800)
      },
      ajaxFormSubmit = function (form, event) {
        let string = $(form).serialize();
        $.ajax({
          type: "POST",
          data: string,
          success: function () {},
          error: function () {}
        });
        return false;
      };

  form.validate({
    rules: {
      user_phone: {
        required: true
      },
      user_message: {
        required: true
      },
      politic: {
        required: true
      },
      'check_group[]': {
        required: true
      },
      'check_group_hor[]': {
        required: true
      },
      'radio_group[]': {
        required: true
      }
    },
    messages: {
      user_phone: {
        required: $v.$requiredField
      },
      user_message: {
        required: $v.$requiredField
      },
      politic: {
        required: $v.$requiredCheck
      },
      'check_group[]': {
        required: $v.$requiredChecks
      },
      'check_group_hor[]': {
        required: $v.$requiredChecks
      },
      'radio_group[]': {
        required: $v.$requiredChecks
      }
    },
    focusCleanup: false,
    focusInvalid: true,
    submitHandler: $example ? example : ajaxFormSubmit
  })
}
