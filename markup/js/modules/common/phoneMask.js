import IMask from "imask";

// Маска для телефона
export function phoneMask() {
  let element = document.querySelectorAll('.phone-mask');

  if (element.length >= 1) {
    element.forEach(phone => {
      IMask(phone, {
        mask: '+{7} (000) 000-00-00',
        lazy: false, // make placeholder always visible
      });
    });
  }
}

// Docs - https://imask.js.org/guide.html
