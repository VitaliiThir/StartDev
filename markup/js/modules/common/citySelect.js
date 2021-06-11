// Функционал для выбора городов (jQuery)
export function citySelect() {
  let cityInput = document.getElementById('x-user-city');

  if (cityInput.length >= 1) {
    cityInput.fias({
      token: 'Tt4t74ARSTQEsA2DBKfZD5FEyfzbGYE4',
      type: $.fias.type.city,
      verify: true,
      url: 'https://kladr-api.com/api.php'
    });
  }
}
