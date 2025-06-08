"use strict";
//КОТ ДЛЯ БУРГЕРА

//ВЫПАДАЮЩЕЕ МЕНЮ В ФУТЕРЕ

const dropDown = document.querySelectorAll('.footer__dropdown-arrow'),
      listInfo = document.querySelectorAll('.footer__info-block');

dropDown.forEach((item, iter) => {
    item.addEventListener('click', () => {
        listInfo[iter].classList.toggle('info-block_active');
    });

});
//БУРГЕР
const burgerIcon = document.querySelector(".header__burger");
const header = document.querySelector(".header");
const modalBurger = document.querySelector(".burger-modal");

burgerIcon.addEventListener("click", function(e) {
    burgerIcon.classList.toggle("Active");
});

burgerIcon.addEventListener("click", function(e) {
    modalBurger.classList.toggle("Active");
});

modalBurger.addEventListener("click", function(e) {
    if(e.target === modalBurger) {
        modalBurger.classList.remove("Active");
        burgerIcon.classList.remove("Active");
    }
});

//Theme
const themeCheck = document.getElementById("checkbox");
const themeCheck1 = document.getElementById("checkbox1");
const logoImage = document.querySelectorAll(".logoImage")
let darkTheme = true;

themeCheck.addEventListener("click", function(e) {
    changeTheme(themeCheck, themeCheck1);
});

themeCheck1.addEventListener("click", function(e) {
    changeTheme(themeCheck1, themeCheck);
});

function changeTheme(theme1, theme2) {
    if(theme1.checked) {
        theme2.checked = true;
        document.documentElement.setAttribute("data-light", "true");
        logoImage.forEach(img => img.src = "../pics/icons/LogoLight.svg");
        darkTheme = false;
    } else {
        document.documentElement.removeAttribute("data-light");
        logoImage.forEach(img => img.src = "../pics/icons/Logo.svg");
        darkTheme = true;
        theme2.checked = false;
    }
}
