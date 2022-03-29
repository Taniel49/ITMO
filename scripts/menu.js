const page = document.querySelector('.page');
const burger = page.querySelector('.burger');
const burgerLineList = Array.from(burger.querySelectorAll('.burger__line'));
const menu = page.querySelector('.menu');

function toggleMenu() {
  burger.classList.toggle('burger_open');
  menu.classList.toggle('menu_open');

  burgerLineList.forEach((line) => {
    line.classList.toggle('burger__line_open');
  });
}

burger.addEventListener('click', toggleMenu);
