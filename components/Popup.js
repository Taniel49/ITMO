class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    openPopup() {
        this._popup.classList.add('popup_open');
    }

    closePopup() {
        this._popup.classList.remove('popup_open');
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
                this.closePopup();
            }
        })
    }
}

export default Popup;