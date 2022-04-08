// const userForm = {
//   formSelector: '.feedback__form',
//   inputSelector: '.feedback__input',
//   submitButtonSelector: '.feedback__button',
//   inactiveButtonClass: 'feedback__button_inactive',
//   errorClass: 'feedback__errorplace_active',
// }

// function isValidForm (form) {
//   return form.checkValidity();
// }

// function isValid (input) {
//   return input.checkValidity();
// }

//выключает кнопку
// function disableButton (input, submit, userForm) {
//   if (isValid(input)) {
//     submit.classList.remove(userForm.inactiveButtonClass);
//     submit.removeAttribute('disabled');
//   } else {
//     submit.classList.add(userForm.inactiveButtonClass);
//     submit.setAttribute('disabled', 'disabled');
//   }
// };

//показывает ошибку
// function showError (form, input, userForm) {
//   const inputName = input.getAttribute('name');
//   const errorElement = document.getElementById(`${inputName}-error`);
//   errorElement.textContent = input.validationMessage;
//   errorElement.classList.add(userForm.errorClass);
// };

//скрывает ошибку
// function hidenError (form, input, userForm) {
//   const inputName = input.getAttribute('name');
//   const errorElement = document.getElementById(`${inputName}-error`);
//   errorElement.classList.remove(userForm.errorClass);
//   errorElement.textContent = "";
// };

//проверяет инпуты на валидность и показывает или скрывает ошибку
// function isValidInput (form, input, userForm) {
//   if (isValid(input)) {
//       hidenError(form, input, userForm);
//       input.classList.remove('feedback__input_error');
//   } else {
//       showError(form, input, userForm);
//       input.classList.add('feedback__input_error');
//   }
// }

//накладывает функции на инпуты
// function addInputListeners (form, userForm) {
//   const inputs = Array.from(form.querySelectorAll(userForm.inputSelector));
//   const submit = form.querySelector(userForm.submitButtonSelector);

//   inputs.forEach((input) => {
//       input.addEventListener('input', function () {
//         isValidInput(form, input, userForm);
//           disableButton(input, submit, userForm);
//           inputReset (form, input);
//       });
//       disableButton(input, submit, userForm);
//   });
// };

//накладывает валидацию
// function enableValidation (userForm) {
//   const forms = Array.from(document.querySelectorAll(userForm.formSelector));

//   forms.forEach(form => {
//       form.addEventListener('submit', (evt) => {
//           evt.preventDefault();
//       });
//       addInputListeners(form, userForm);
//   });
// };

//НЕ РАБОТАЕТ очищение сообщения
// function inputReset (form, input) {
// const button = form.querySelector(userForm.submitButtonSelector);
// const message = document.querySelector('.feedback__textarea');
// button.addEventListener('click', function () {

//   console.log(message.value);
//   input.value = '';
//   message.value = '';
// });
// };

// enableValidation(userForm);


// 1. кнопка работает если обязательный инпут незаполнен

