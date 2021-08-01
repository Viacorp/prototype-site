const body = document.querySelector('body')

const openMenuAnimation = gsap.timeline({paused: true})

openMenuAnimation.to('header', {
    duration: 0,
    display: 'flex'
})

openMenuAnimation.to('.header__menu', {
    duration: .5,
    translateX: 0
})

openMenuAnimation.to('.header__hiddenCubes', {
    duration: 0,
    display: 'block'
})

openMenuAnimation.to('.header__circle', {
    duration: 0,
    display: 'block'
})

openMenuAnimation.to('.header__line', {
    duration: .5,
    height: 'calc(50% - 66px)',
})

openMenuAnimation.to('.header__circle', {
    duration: .5,
    transform: 'translate(-50%, -50%) rotate(45deg)'
})

openMenuAnimation.to('.header__closeBtn', {
    duration: .3,
    rotate: 360,
    scale: 1
})

openMenuAnimation.to('.header__menuItem a', {
    duration: .3,
    stagger: .1,
    translateY: 0,
})

openMenuAnimation.to('.header__contactsItem a', {
    duration: .3,
    stagger: .1,
    translateY: 0,
})

const openMainMenu = document.querySelectorAll('.openMainMenu')

for (openMenu of openMainMenu) {
    openMenu.addEventListener('click', () => {
        body.style.overflow = 'hidden'
        openMenuAnimation.timeScale(1).play()
    })
}

document.getElementById('closeHeaderMenu').addEventListener('click', () => {
    openMenuAnimation.timeScale(2).reverse()
    body.style.overflow = 'auto'
})

// menu links
document.getElementById('linkPortfolio').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/?portfolio'
})

document.getElementById('linkAbout').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/?about'
})

window.onload = () => {
    if (window.location.href.indexOf('portfolio') > -1) {
        gsap.to(window, {
            duration: 1,
            scrollTo: document.querySelector('#mainIndexWindow').scrollWidth,
            autoKill: false
        });
    }
    if (window.location.href.indexOf('about') > -1) {
        gsap.to(window, {
            duration: 1,
            scrollTo: 'max',
            autoKill: false
        });
    }
}
