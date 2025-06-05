"use strict";

//ВЫПАДАЮЩЕЕ МЕНЮ В ФУТЕРЕ

const dropDown = document.querySelectorAll('.footer__dropdown-arrow'),
      listInfo = document.querySelectorAll('.footer__info-block'),
      footer = document.querySelector('.footer');

dropDown.forEach((item, iter) => {
    item.addEventListener('click', () => {
        listInfo[iter].classList.toggle('info-block_active');
        (!footer.hasAttribute('data-active')) 
        ? footer.setAttribute('data-active', '')
        : footer.removeAttribute('data-active') 
    });

});