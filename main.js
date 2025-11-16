const btnBurger = document.querySelector('.btn-burger');
const mobileMenu = document.querySelector('.mobile-navbar');

btnBurger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});


/* mon code  */
/*
let btn = document.querySelector('.btn-burger').addEventListener('click', function() {
    console.log('click');
    let isShow = document.querySelector('.btn-burger .mobile-navbar').classList.toggle('show') ;
    let show = isShow ? document.querySelector('.btn-burger .mobile-navbar').classList.add('show') : document.querySelector('.btn-burger .mobile-navbar').classList.remove('show');
});*/
