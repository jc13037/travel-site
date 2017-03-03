import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    this.openModalButton.click(this.openModal.bind(this)); //bind allows the 'this' keyword to be carried on
    this.closeModalButton.click(this.closeModal.bind(this));
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass('modal--is-visible');
    return false; // prevents button from redirecting to '#'
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
  }
}

export default Modal;
