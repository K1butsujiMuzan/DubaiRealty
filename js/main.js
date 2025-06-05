"use strict";
const burgerIcon = document.querySelector(".header__burger");
const header = document.querySelector(".header");
let burgerIconOpen = true;

burgerIcon.addEventListener("click", function(e) {
    burgerIcon.classList.toggle("Active");
});
