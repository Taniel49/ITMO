const educationContainer = document.querySelector('.education__container');
const aspirantCard = document.querySelector('.education__card-aspirant');
const magistrCard = document.querySelector('.education__card-magistr');

const aspirantButton = document.querySelector('.education__switch-aspirant');
const magistrButton = document.querySelector('.education__switch-magistracy');

function switchCard (cardOne, cardTwo) { //меняет содержимое блока
    if (cardOne.classList.contains('education__card_hidden')) {
        return;
    } else {
        cardTwo.classList.remove('education__card_hidden');
        cardOne.classList.add('education__card_hidden');
    }
}

function switchButton (buttonOne, buttonTwo) { //меняет вид кнопки
    if (buttonOne.classList.contains('education__switch-button_active')) {
        return;
    } else {
        buttonOne.classList.add('education__switch-button_active');
        buttonOne.classList.remove('education__switch-button');
        buttonTwo.classList.remove('education__switch-button_active');
        buttonTwo.classList.add('education__switch-button');
    }
}

aspirantButton.addEventListener('click', function () {
    switchCard(magistrCard, aspirantCard);
});

magistrButton.addEventListener('click', function () {
    switchCard(aspirantCard, magistrCard);
});

aspirantButton.addEventListener('click', function () {
    switchButton(aspirantButton, magistrButton);
});

magistrButton.addEventListener('click', function () {
    switchButton(magistrButton, aspirantButton);
});