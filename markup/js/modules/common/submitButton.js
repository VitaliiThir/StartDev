// Submit loader
export function submitButton(demo) {
  let submit = document.querySelectorAll('.dev-btn-submit');

  submit.forEach(btn => btn.addEventListener('click', function () {
    btn.classList.add('loader');

    if (demo) {
      setTimeout(() => {
        btn.classList.remove('loader');
      }, 800)
    }
  }));
}
