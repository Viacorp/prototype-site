/* header menu */
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


document.getElementById('openMainMenu').addEventListener('click', () => {
    body.style.overflow = 'hidden'
    openMenuAnimation.play()
})

document.getElementById('closeHeaderMenu').addEventListener('click', () => {
    openMenuAnimation.reverse()
    body.style.overflow = 'auto'
})

