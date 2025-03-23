var typed = new Typed(".input",{
    strings : ["Coder.","Programmer.","Trader."],
    typeSpeed : 130,
    backSpeed :80,
    loop:true
})
const header = document.querySelector("header");

window.addEventListener("scroll", function() { 
    header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let nav_list =document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav_list.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav_list.classList.remove('open');
};