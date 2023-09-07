 const closeNav = document.querySelector('.close-nav');
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');
 const logo = document.querySelector('.logo')
 const heroImg = document.querySelector('.hero-b-img')
 const socialLinks = document.querySelector('.social_links')


 hamburger.addEventListener('click', openNav);
 closeNav.addEventListener('click', closeNavBar) 


 function openNav(){
    closeNav.classList.add('open-nav')
    hamburger.classList.add('close-hamburger')
    navLinks.classList.add('open-mobile-nav')
    logo.classList.add('open-logo-nav-link')
    socialLinks.classList.add('open_social_link')
    
 }

 function closeNavBar(){
    hamburger.classList.remove('close-hamburger')
    closeNav.classList.remove('open-nav')
    navLinks.classList.remove('open-mobile-nav')
    logo.classList.remove('open-logo-nav-link')
    socialLinks.classList.remove('open_social_link')
 }


const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.dropdown-content')


questions.forEach(function(question, index){
    question.addEventListener('click', function(){
        if(answers[index].style.display === "none"){
            answers[index].style.display = "block"
        }else{
            answers[index].style.display = "none"
        }

        questions.forEach((q, i) => {
            if(i !== index) {
                answers[i].style.display = 'none'
            }
        })
    })
})