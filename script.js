const closeNav = document.querySelector('.close-nav');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', openNav);
closeNav.addEventListener('click', closeNavBar) 


function openNav(){
    closeNav.classList.add('open-nav')
    hamburger.classList.add('close-hamburger')
    navLinks.classList.add('open-mobile-nav')
    
}

function closeNavBar(){
    hamburger.classList.remove('close-hamburger')
    closeNav.classList.remove('open-nav')
    navLinks.classList.remove('open-mobile-nav')
    
}