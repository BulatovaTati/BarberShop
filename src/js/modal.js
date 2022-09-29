(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  let isShown = false;

  refs.openModalBtn.forEach(el => el.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('is-modal-shown');
    isShown
      ? document.body.removeEventListener('keydown', onKeyDown)
      : document.body.addEventListener('keydown', onKeyDown);
    isShown = !isShown;
  }

  function onBackdropClick(event) {
    if (event.target != event.currentTarget) return;
    toggleModal();
  }

  function onKeyDown(event) {
    if (event.code !== 'Escape') return;
    toggleModal();
  }
})();
