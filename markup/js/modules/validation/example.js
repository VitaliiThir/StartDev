import { variables as $v } from "../../vars";

export function formValidationExample($example) {
  let requiredField = $v.$lang === 'ru' ? 'Поле обязательно для ввода' : 'The field is required',
      form = $('#form-example'),
      example = function() {},
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
      user_name: {
        required: requiredField
      },
      user_phone: {
        required: requiredField
      },
      user_message: {
        required: requiredField
      },
      politic: {
        required: requiredField
      },
      'check_group[]': {
        required: requiredField
      },
      'check_group_hor[]': {
        required: requiredField
      },
      'radio_group[]': {
        required: requiredField
      }
    },
    focusCleanup: false,
    focusInvalid: true,
    submitHandler: $example ? example : ajaxFormSubmit
  })
}
