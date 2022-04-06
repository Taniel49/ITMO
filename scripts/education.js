const aspirantCard = document.querySelector('.education__card-aspirant');
const masterCard = document.querySelector('.education__card-magistr');

const aspirantButton = document.querySelector('.education__switch-aspirant');
const masterButton = document.querySelector('.education__switch-magistracy');

function switchCard (cardOne, cardTwo) { //меняет содержимое блока
    if (!cardOne.classList.contains('education__card_hidden')) {
        cardTwo.classList.remove('education__card_hidden');
        cardOne.classList.add('education__card_hidden');
    }
 }

function switchButton (buttonOne, buttonTwo) { //меняет вид кнопки
    if (!buttonOne.classList.contains('education__switch-button_active')) {
        buttonOne.classList.add('education__switch-button_active');
        buttonOne.classList.remove('education__switch-button');
        buttonTwo.classList.remove('education__switch-button_active');
        buttonTwo.classList.add('education__switch-button');
    }
}

aspirantButton.addEventListener('click', function () {
    switchCard(masterCard, aspirantCard);
});

masterButton.addEventListener('click', function () {
    switchCard(aspirantCard, masterCard);
});

aspirantButton.addEventListener('click', function () {
    switchButton(aspirantButton, masterButton);
});

masterButton.addEventListener('click', function () {
    switchButton(masterButton, aspirantButton);
});
