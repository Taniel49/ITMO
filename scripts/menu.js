const page = document.querySelector(".page");
const content = page.querySelector(".content");
const footer = page.querySelector(".footer");

const burger = page.querySelector(".burger");
const burgerLinesList = Array.from(burger.querySelectorAll(".burger__line"));

const menu = page.querySelector(".menu");
const linksList = Array.from(menu.querySelectorAll(".menu__link"));
const linkOpener = menu.querySelector(".menu__link_type_opener");
const submenu = menu.querySelector(".submenu");

const heightSubmenu = submenu.offsetHeight; // Высота подменю
const heightMenu = menu.offsetHeight; // Высота меню
const heightMenuWithoutSubmenu = menu.offsetHeight - heightSubmenu; // Высота меню с закрытым подменю

// Обнуление высоты меню
function resetHeightMenu(menu) {
  menu.style.height = "0px";
}

// Фукнкция открытия меню
function openMenu(menu) {
  menu.classList.add(`${menu.id}_open`);
  menu.style.height = `${menu.scrollHeight}px`;
}

// Фукнкция закрытия меню
function closeMenu(menu) {
  menu.classList.remove(`${menu.id}_open`);
  menu.style.height = "0px";
}

// Функция открытия/закрытия меню
function toggleMenu(menu) {
  if (!menu.classList.contains(`${menu.id}_open`)) {
    openMenu(menu);
  } else {
    closeMenu(menu);
  }
}

// Функция изменения высоты меню
function changeHeightMenu() {
  if (submenu.classList.contains("submenu_open")) {
    menu.style.height = heightMenu + "px";
  } else {
    menu.style.height = heightMenuWithoutSubmenu + "px";
  }
}

// Функция открытия/закрытия меню навигации
function toggleNavMenu() {
  burger.classList.toggle("burger_open");

  burgerLinesList.forEach((line) => {
    line.classList.toggle("burger__line_open");
  });

  toggleMenu(menu);
}

// Функция открытия/закрытия подменю навигации
function toggleSubmenu() {
  linkOpener.classList.toggle("menu__link_open");

  linksList.forEach((link) => {
    link.classList.toggle("menu__link_inactive");
    link.toggleAttribute("disabled");
  });

  toggleMenu(submenu);

  changeHeightMenu();
}

// // Функция открытия/закрытия меню по клику вне элемента
function closeMenus() {
  burger.classList.remove("burger_open");

  burgerLinesList.forEach((line) => {
    line.classList.remove("burger__line_open");
  });

  closeMenu(submenu);

  linkOpener.classList.remove("menu__link_open");

  linksList.forEach((link) => {
    link.classList.remove("menu__link_inactive");
    link.removeAttribute("disabled");
  });

  closeMenu(menu);
}

burger.addEventListener("click", toggleNavMenu);

linkOpener.addEventListener("click", toggleSubmenu);

content.addEventListener("click", closeMenus);

footer.addEventListener("click", closeMenus);

resetHeightMenu(menu);

resetHeightMenu(submenu);
