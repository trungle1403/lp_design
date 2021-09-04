$(document).ready(function(){
    $(".brand-list").owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        dots:false,
        responsive:{
            800:{
                items:5
            }
        }
    });
    $(".clients-list").owlCarousel({
        center: true,
        items:1,
        loop:true,
    });
    $(".blog-list").owlCarousel({
        items:3,
        loop:true,
        margin: 30,
        center:true,
        responsive:{
            800:{
                items:3
            },
            678:{
                items:2
            },
            468:{
                items:1
            },
            300:{
                items:1
            }
        }
    });
});

const header = document.querySelector('.header')
const logo = document.querySelector('.nav-logo-img')

window.addEventListener('scroll',(e) => {
    let scroll = 50
    header.classList.toggle('active', window.scrollY > scroll)
    if(window.scrollY > scroll) {
        logo.setAttribute('src', "./images/logo.png")
    }else {
        logo.setAttribute('src', "./images/logo-light.png")
    }
})


const sections = document.querySelectorAll('section[id]')

function scrollActiveLink() {
    const scrollY = window.pageYOffset
    sections.forEach( s => {
        //height of section
        const sectionHeight = s.offsetHeight
        const sectionTop = s.offsetTop - 80;
        sectionId = s.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-list a[href*='+ sectionId+']').classList.add('active')
        }else {
            document.querySelector('.nav-list a[href*='+ sectionId+']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActiveLink)


const btnToggleNav = document.querySelector('.nav-toggle')
const btnCloseNav = document.querySelector('.nav-close')
const nav = document.querySelector('.nav-list')
const navOverlay = document.querySelector('.nav-overlay')
const navLink = document.querySelectorAll('.nav-link')

btnToggleNav.addEventListener('click',(e) => {
    nav.classList.add('active')
    navOverlay.classList.add('active')
    // document.body.classList.add('no-scroll')
})
btnCloseNav.addEventListener('click',(e) => {
    nav.classList.remove('active')
    navOverlay.classList.remove('active')
    // document.body.classList.remove('no-scroll')
})

navLink.forEach(item => {
    item.addEventListener('click',(e) => {
        nav.classList.remove('active')
        navOverlay.classList.remove('active')
        // document.body.classList.remove('no-scroll')
    })
})

window.addEventListener('click',(e) => {
    if(e.target.matches('.nav-overlay')){
        nav.classList.remove('active')
        navOverlay.classList.remove('active')
    }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '70px',
    duration: 2000,
    delay: 400,
    // reset: true
})
sr.reveal(`.nav-logo, .nav-item, .about-desc, .about-signature, .numbers-item, .projects-item, .brand-list, .blog-list, .footer-link, .footer-copy`,{origin: 'top', interval: 100})
sr.reveal(`.section-title, .nav-toggle`,{origin: 'top', scale: .8})
sr.reveal(`.projects-item`,{scale: .8})
sr.reveal(`.hero-title,.hero-subtitle, .hero-scroll, .projects-desc, .blog-subtitle`,{origin: 'bottom', scale: .7, interval: 100})
sr.reveal(`.clients-list`,{origin: 'bottom', scale: .8})
sr.reveal(`.contact-content`, {origin: 'left'})
sr.reveal(`.contact-form`, {origin: 'right'})