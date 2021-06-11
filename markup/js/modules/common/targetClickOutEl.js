// События элемента при клике вне него (native)
export function targetClickOutEl() {
  $(document).mouseup(function (e) {
    if (!$('selector').is(e.target) && $('selector').has(e.target).length === 0) {
      //Actions...
    }
  });
}
