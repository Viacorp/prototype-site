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

const openMainMenu = document.querySelectorAll('.openMainMenu')

for (openMenu of openMainMenu) {
    openMenu.addEventListener('click', () => {
        body.style.overflow = 'hidden'
        openMenuAnimation.play()
    })
}

document.getElementById('closeHeaderMenu').addEventListener('click', () => {
    openMenuAnimation.reverse()
    body.style.overflow = 'auto'
})

/* index page */
//horizontal scroll
const indexSection = gsap.utils.toArray(".index__section");
let maxWidth = 0;

const getMaxWidth = () => {
    maxWidth = 0;
    indexSection.forEach((section) => {
        maxWidth += section.offsetWidth;
    });
};
getMaxWidth();
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

gsap.to(indexSection, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
        trigger: ".index__container",
        pin: true,
        scrub: 1,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
    }
});

/* portfolio */
// background animation
const portfolioItems = gsap.utils.toArray(".portfolio__backgroundItem");

let maxWidthPortfolio = 0;

const getMaxWidthPortfolio = () => {
    maxWidthPortfolio = 0;
    document.querySelectorAll('.portfolio__item').forEach((section) => {
        maxWidthPortfolio += section.offsetWidth;
    });
};
getMaxWidthPortfolio();
ScrollTrigger.addEventListener("refreshInit", getMaxWidthPortfolio);

gsap.to(portfolioItems, {
    objectPosition: "100% 50%",
    ease: "none",
    scrollTrigger: {
        trigger: ".portfolio",
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
    }
});

gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 1 }
});

