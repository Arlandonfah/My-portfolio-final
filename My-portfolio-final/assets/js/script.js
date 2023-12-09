/*------------show menu---------*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*-----menu show--------*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*--------------menu hidden-------*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*------------------remove menu mobile----*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
  const navMenu = document.getElementById('nav__menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*--------------------shadow header--------------------*/

const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*--------------------------email---------------*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  //serviceID - TEMPLATEID - #FORM - PUBLICKEY
  emailjs.sendForm('service_z57f3ly', 'template_mp8hd8f', '#contact-form', 'VRLH1DC27vz2VjjQS')
    .then(() => {
      //notification du message envoyé
      contactMessage.textContent = 'Message envoyé avec succès ✅';

      //supprime le msg apres
      setTimeout(() => {
        contactMessage.textContent = ''
      }, 5000)

      //supprimer les champs 
      contactForm.reset()
    }, () => {
      //message d'erreur
      contactMessage.textContent = 'Message non envoyé, veuillez réessayez à nouveau ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

/*------------------------show scroll up------*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*--------------scroll sections ---------------------*/

const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
  const scrollDown = window.scrollY
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*-----------------dark light theme*-------*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-lin'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*--------------------scroll reveal animation------------*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true,
})
sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: 'right' })
sr.reveal(`.home__name, .home__info,
            .about__container .section__title-1, .about__info,
            .contact__social, .contact__data`, { origin: 'left' })
sr.reveal(`.services__card, .projects__card`, { interval: 100 })
