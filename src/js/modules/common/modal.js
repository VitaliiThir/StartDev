// Popup (MicroModal) (jQuery)
export function modal() {
  MicroModal.init({
    onShow: modal => {},
    onClose: modal => {},
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close',
    openClass: 'is-open',
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
  });
}
