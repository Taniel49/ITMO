import Popup from "../components/Popup.js";

const popupLab = new Popup('.popup__lab');

const cardProject = document.querySelector('.lab__card_type_project');
const cardMachine = document.querySelector('.lab__card_type_machine');
const cardData = document.querySelector('.lab__card_type_data');
const cardRobot = document.querySelector('.lab__card_type_robot');

cardProject.addEventListener('click', function () {
    popupLab.openPopup();
})

cardMachine.addEventListener('click', function () {
    popupLab.openPopup();
})

cardData.addEventListener('click', function () {
    popupLab.openPopup();
})

cardRobot.addEventListener('click', function () {
    popupLab.openPopup();
})

popupLab.setEventListeners();
