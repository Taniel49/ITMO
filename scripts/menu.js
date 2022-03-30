const page = document.querySelector('.page');

const burger = page.querySelector('.burger');
const burgerLinesList = Array.from(burger.querySelectorAll('.burger__line'));

const menu = page.querySelector('.menu');
const linksList = Array.from(menu.querySelectorAll('.menu__link'));
const linkOpener = menu.querySelector('.menu__link_type_opener');
const submenu = menu.querySelector('.submenu');

// Функция плавного выпадения/скрытия меню
function toggleMenu(menu) {
  if (menu.style.height === "0px") {
    menu.style.height = `${ menu.scrollHeight }px`;
  } else {
    menu.style.height = "0";
  }
}

// Функция удаления значения высоты
function deleteHeight(menu) {
  menu.style.height = "";
}

// Функция выпадения/скрытия меню навигации
function toggleNavMenu() {
  burger.classList.toggle('burger_open');

  burgerLinesList.forEach((line) => {
    line.classList.toggle('burger__line_open');
  });

  toggleMenu(menu);
}

// Функция выпадения/скрытия подменю навигации
function toggleSubmenu() {
  linkOpener.classList.toggle('menu__link_open');

  linksList.forEach((link) => {
    link.classList.toggle('menu__link_type_inactive');
  });

  toggleMenu(submenu);
}

burger.addEventListener('click', toggleNavMenu);

linkOpener.addEventListener("click", toggleSubmenu);

menu.addEventListener("transitionend", () => {
  deleteHeight(menu);
});
