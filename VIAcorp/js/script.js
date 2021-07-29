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

if (document.querySelector('.index__section')) {

    if (window.innerWidth > 900) {

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
    }

}

/* main window */
if (document.getElementById('mainIndexWindow')) {

// milky way
    gsap.to('.mainWindow__milkyWaySvg', 60, {
        rotate: 360,
        ease: 'linear',
        repeat: -1
    })

    gsap.to('.mainWindow__milkyWaySvg path', 8, {
        rotate: 360,
        ease: 'linear',
        repeat: -1
    })

//circle island
    gsap.to('.mainWindow__circleArraySvg path', 8, {
        rotate: 360,
        ease: 'linear',
        repeat: -1
    })

// welcome title
    const welcomeTitle = document.querySelector('.mainWindow__title h2')
    const welcomeTitleText = 'welcome'
    welcomeTitle.innerHTML = ''
    let welcomeTitleTextArray = welcomeTitleText.split('').map(letter => `<span class="welcomeTitleLetter">${letter}</span>`)
    welcomeTitleTextArray.forEach(symbol => welcomeTitle.innerHTML += symbol)

// creative studio title
// word creative
    let creativeTitle = document.querySelector(".mainWindow__creative")
    const creativeTitleText = 'Creative'
    creativeTitle.innerHTML = ''
    let creativeTitleTextArray = creativeTitleText.split('').map(letter => `<span class="creativeTitleLetter">${letter}</span>`)
    creativeTitleTextArray.forEach(symbol => creativeTitle.innerHTML += symbol)

// word studio
    let studioTitle = document.querySelector(".mainWindow__studio")
    const studioTitleText = 'Studio'
    studioTitle.innerHTML = ''
    let studioTitleTextArray = studioTitleText.split('').map(letter => `<span class="studioTitleLetter">${letter}</span>`)
    studioTitleTextArray.forEach(symbol => studioTitle.innerHTML += symbol)

// slogan
    let sloganTitle = document.querySelector(".mainWindow__slogan")
    const sloganTitleText = 'Сложное просто'
    sloganTitle.innerHTML = ''
    let sloganTitleTextArray = sloganTitleText.split('').map(letter => `<span class="sloganTitleLetter">${letter}</span>`)
    sloganTitleTextArray.forEach(symbol => sloganTitle.innerHTML += symbol)

//main animation
    let indexMainWindowMainAnimation = gsap.timeline({delay: 0})

    indexMainWindowMainAnimation.to('.welcomeTitleLetter', 3, {
        opacity: 1,
        stagger: .2,
    })

    indexMainWindowMainAnimation.to('.creativeTitleLetter', 2, {
        opacity: 1,
        stagger: .2,
    }, 0)

    indexMainWindowMainAnimation.to('.studioTitleLetter', 2, {
        opacity: 1,
        stagger: .3,
    }, 0)

    indexMainWindowMainAnimation.to('.sloganTitleLetter', 1, {
        opacity: 1,
        stagger: .1,
    }, '-=2')

    indexMainWindowMainAnimation.to('.mainWindow__topLeaves', .5, {
        transform: 'translateY(0)',
        stagger: .2
    }, '-=1')

    indexMainWindowMainAnimation.to('.mainWindow__palmSvg', .5, {
        transform: 'rotate(-10deg) translateX(30%)'
    })

    indexMainWindowMainAnimation.to('.mainWindow__palmSvg', .5, {
        transform: 'rotate(0deg)'
    })

    indexMainWindowMainAnimation.to('.mainWindow__bottomLeaves', .5, {
        transform: 'translateY(0)',
        stagger: .2
    }, '-=.5')

    indexMainWindowMainAnimation.to('.mainWindow__giraffe', .5, {
        transform: 'translateX(-50%) translateY(0%)'
    })


}

/* about */
if(document.querySelector('.about')) {

let aboutAnimation = (element, functionAnimation, functionAnimationReverse) => {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return
            }

            if (entry.isIntersecting) {
                functionAnimation()
                return
            }

            functionAnimationReverse()
        });
    });

    observer.observe(element);
}

let aboutStartPlay = () => {
    let aboutStartTimeline = gsap.timeline({delay: 1})
    let aboutStartTo = (element) => {
        aboutStartTimeline.to(element, {
            opacity: 1,
            transform: 'none'
        })}

    aboutStartTo('.about .topLogo')
    aboutStartTo('.about .about__startBird')
    aboutStartTo('.about__start p')
    aboutStartTo('.about .index__pagination')
}
let aboutStartReverse = () => {
    let aboutStartTo = (element) => {
        gsap.to(element, {
            opacity: 0,
            transform: 'translateX(-30px)'
        })}

    aboutStartTo('.about .topLogo')
    aboutStartTo('.about .about__startBird')
    aboutStartTo('.about__start p')
    aboutStartTo('.about .index__pagination')
}
aboutAnimation(document.querySelector('.about__start'), aboutStartPlay, aboutStartReverse)

let aboutTeamPlay = () => {
    let aboutTeamTimeline = gsap.timeline({delay: 1})
    let aboutStartTo = (element) => {
        aboutTeamTimeline.to(element, {
            opacity: 1,
            transform: 'none',
            stagger: .3
        })}

    aboutStartTo('.about__team h2')
    aboutStartTo('.about__teamItem')
    aboutStartTo('.about__teamCallback')
}
let aboutTeamReverse = () => {
    let aboutStartTo = (element) => {
        gsap.to(element, {
            opacity: 0,
            transform: 'translateY(-30px)'
        })}

    aboutStartTo('.about__team h2')
    aboutStartTo('.about__teamItem')
    aboutStartTo('.about__teamCallback')
}
aboutAnimation(document.querySelector('.about__team'), aboutTeamPlay, aboutTeamReverse)

}

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

if (document.querySelector('.portfolio__backgroundItem')) {

    if (window.innerWidth > 900) {

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
            scrollTrigger: {scrub: 1}
        });
    }

}

/* callback page */
// callback arrow

if (document.querySelector('.callbackArrow')) {

    const callbackAnimationArrow = gsap.timeline({
        repeat: -1
    })

    callbackAnimationArrow.to('.callbackArrow', 1.5, {
        strokeDasharray: '860px',
        x: -10
    })

    callbackAnimationArrow.to('.callbackArrow', 1.5, {
        delay: .5,
        strokeDasharray: '430px',
        x: 0
    })

}

// callback form window
if (document.querySelector('.callback')) {

    const callbackNameAnimationOpen = gsap.timeline({delay: 0})
    callbackNameAnimationOpen.to('.callback__name .callback__nextStep', .5, {
        opacity: 1
    })
    callbackNameAnimationOpen.to('.callback__name .callback__numberPage', .5, {
        opacity: 1
    }, '-=.5')
    callbackNameAnimationOpen.to('.callback__name h2', .5, {
        transform: 'translateX(0px)',
        opacity: 1
    })
    callbackNameAnimationOpen.to('.callback__name input', .5, {
        width: '70%',
        opacity: 1
    })


    const openCallbackWindowAnimation = (nameTimeline, classActive) => {
        nameTimeline.to(classActive, .3, {
            visibility: 'visible'
        })

        nameTimeline.to(classActive, 1, {
            opacity: 1,
            width: '10%'
        })

        nameTimeline.to(classActive, 1, {
            width: '100%',
            height: '100%',
            padding: '200px 10px 10px'
        })

        nameTimeline.to(`${classActive} h2`, .3, {
            opacity: 1
        }, '-=.6')

        nameTimeline.to(`${classActive} input`, .3, {
            opacity: 1
        }, '-=.6')

        nameTimeline.to(`${classActive} .callback__nextStep`, .3, {
            opacity: 1
        }, '-=.6')

        nameTimeline.to(`${classActive} .callback__numberPage`, .3, {
            opacity: 1
        }, '-=.6')

        nameTimeline.to(classActive, 1, {
            border: 'none'
        })
    }
    const closeCallbackWindowAnimation = (nameTimeline, classActive) => {
        nameTimeline.to(classActive, .3, {
            border: '2px solid #72CD04',
        })

        nameTimeline.to(classActive, 1, {
            width: '10%',
            height: 0,
            padding: 0
        })

        nameTimeline.to(`${classActive} h2`, .3, {
            opacity: 0
        }, '-=1.1')

        nameTimeline.to(`${classActive} input`, .3, {
            opacity: 0
        }, '-=1.1')

        nameTimeline.to(`${classActive} .callback__nextStep`, .3, {
            opacity: 0
        }, '-=1.1')

        nameTimeline.to(`${classActive} .callback__numberPage`, .3, {
            opacity: 0
        }, '-=1.1')

        nameTimeline.to(classActive, 1, {
            opacity: 0,
            width: 0
        })

        nameTimeline.to(classActive, .3, {
            visibility: 'hidden'
        })
    }


    const callbackNameAnimationClose = gsap.timeline({delay: 0})
    const callbackPhoneAnimationOpen = gsap.timeline({delay: 0})

    document.getElementById('callbackNextStepName').addEventListener('click', () => {

        if (!document.getElementById('callbackNameInput').value.length) {
            gsap.to('.callback__name .callback__notInput', .5, {
                opacity: 1,
                visibility: 'visible'
            })
        }

        if (document.getElementById('callbackNameInput').value.length) {
            closeCallbackWindowAnimation(callbackNameAnimationClose, '.callback__name')
            setTimeout(() => openCallbackWindowAnimation(callbackPhoneAnimationOpen, '.callback__phone'), 2000)
        }
    })

    document.querySelector('.callback__phone').addEventListener('click', () => {
        if (
            document.getElementById('callbackCirclePhone').checked ||
            document.getElementById('callbackCircleMail').checked ||
            document.getElementById('callbackCircleWhatsapp').checked
        ) {
            gsap.to('#callbackPhoneInput', 1, {
                width: '70%',
                opacity: 1,
                padding: 5
            })
        } else {
            gsap.to('#callbackPhoneInput', 1, {
                width: '0%',
                opacity: 0,
                padding: 0
            })
        }
    })

    const callbackPhoneAnimationClose = gsap.timeline({delay: 0})
    const callbackCompleteAnimationOpen = gsap.timeline({delay: 0})

//countdown
    const countdownFunc = () => {
        const countdown = {val: 5}, NewCountdown = 0;
        const countdownTimeline = gsap.timeline()

        countdownTimeline.to(countdown, 6, {
            scrollTrigger: {trigger: '#callbackComplete'},
            val: NewCountdown,
            roundProps: "val",
            onUpdate: () => {
                document.querySelector(".callback__completeNumbers span").innerHTML = countdown.val
            }
        });

        countdownTimeline.to('.callback__complete', {
            onUpdate: () => window.location.href = '/'
        })
    }

    document.getElementById('callbackNextStepPhone').addEventListener('click', () => {

        if (!document.getElementById('callbackPhoneInput').value.length) {
            gsap.to('.callback__phone .callback__notInput', .5, {
                opacity: 1,
                visibility: 'visible'
            })
        }

        if (document.getElementById('callbackPhoneInput').value.length) {
            closeCallbackWindowAnimation(callbackPhoneAnimationClose, '.callback__phone')
            setTimeout(() => openCallbackWindowAnimation(callbackCompleteAnimationOpen, '.callback__complete'), 2000)
            setTimeout(() => countdownFunc(), 3000)
        }
    })
}

/* contacts page */
if (document.querySelector('.contacts')) {

    //ticker
    gsap.set('.contacts__ticker', {xPercent: -50})

    let tickerBoxWidth = 300,
        tickerTotalWidth = tickerBoxWidth * 8;  //  * n of boxes

    let tickerMod = gsap.utils.wrap(0, tickerTotalWidth)

    gsap.set('.contacts__ticker li', {x: (i) => i * tickerBoxWidth})

    gsap.timeline().to('.contacts__ticker li', 20, {
        x: "+=" + tickerTotalWidth,
        modifiers: {x: (x) => tickerMod(parseFloat(x)) + "px"},
        ease: 'none',
        repeat: -1,
    })


}



