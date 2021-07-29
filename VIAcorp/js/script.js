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
// milky way
gsap.to('.mainWindow__milkyWaySvg', 40, {
    rotate: 360,
    ease: 'linear',
    repeat: -1
})

gsap.to('.mainWindow__milkyWaySvg path', 8, {
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

let lettersTitleEng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
let lettersTitleRu = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("")

// word creative
let creativeTitle = document.querySelector(".mainWindow__creative")
let creativeTitleWord = [0,0,0,0,0,0,0,0]

gsap.timeline({ onUpdate: creativeUpdate })
    .to(creativeTitleWord, 2, { "0": 26 * 3 + 2  }, 0)
    .to(creativeTitleWord, 2.5, { "1": 26 * 3 + 17 }, 0)
    .to(creativeTitleWord, 3, { "2": 26 * 3 + 4  }, 0)
    .to(creativeTitleWord, 3.5, { "3": 26 * 3 + 0 }, 0)
    .to(creativeTitleWord, 4, { "4": 26 * 3 + 19 }, 0)
    .to(creativeTitleWord, 4.5, { "5": 26 * 3 + 8 }, 0)
    .to(creativeTitleWord, 5, { "6": 26 * 3 + 21 }, 0)
    .to(creativeTitleWord, 5.5, { "7": 26 * 3 + 4 }, 0)

function creativeUpdate() {
    let html = "";
    for (let i = 0; i < creativeTitleWord.length; i++) {
        html += lettersTitleEng[Math.round(creativeTitleWord[i]) % 26]
    }
    creativeTitle.innerHTML = html
}

// word studio
let studioTitle = document.querySelector(".mainWindow__studio")
let studioTitleWord = [0,0,0,0,0,0]

gsap.timeline({ onUpdate: studioUpdate })
    .to(studioTitleWord, 2, { "0": 26 * 3 + 18  }, 0)
    .to(studioTitleWord, 2.5, { "1": 26 * 3 + 19 }, 0)
    .to(studioTitleWord, 3, { "2": 26 * 3 + 20  }, 0)
    .to(studioTitleWord, 3.5, { "3": 26 * 3 + 3 }, 0)
    .to(studioTitleWord, 4, { "4": 26 * 3 + 8 }, 0)
    .to(studioTitleWord, 5.5, { "5": 26 * 3 + 14 }, 0)

function studioUpdate() {
    let html = "";
    for (let i = 0; i < studioTitleWord.length; i++) {
        html += lettersTitleEng[Math.round(studioTitleWord[i]) % 26]
    }
    studioTitle.innerHTML = html
}

// slogan
let sloganTitle = document.querySelector(".mainWindow__slogan")
let sloganTitleWord = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]

gsap.timeline({ onUpdate: sloganUpdate })
    .to(sloganTitleWord, 2, { "0": 33 * 3 + 18  }, 0)
    .to(sloganTitleWord, 2.5, { "1": 33 * 3 + 12 }, 0)
    .to(sloganTitleWord, 3, { "2": 33 * 3 + 15  }, 0)
    .to(sloganTitleWord, 3.5, { "3": 33 * 3 + 7 }, 0)
    .to(sloganTitleWord, 4, { "4": 33 * 3 + 14 }, 0)
    .to(sloganTitleWord, 4.5, { "5": 33 * 3 + 15 }, 0)
    .to(sloganTitleWord, 5, { "6": 33 * 3 + 5  }, 0)
    .to(sloganTitleWord, 5.5, { "7": ' '}, 0)
    .to(sloganTitleWord, 6, { "8": 33 * 3 + 16  }, 0)
    .to(sloganTitleWord, 6.5, { "9": 33 * 3 + 17 }, 0)
    .to(sloganTitleWord, 7, { "10": 33 * 3 + 15 }, 0)
    .to(sloganTitleWord, 7.5, { "11": 33 * 3 + 18 }, 0)
    .to(sloganTitleWord, 8, { "12": 33 * 3 + 19 }, 0)
    .to(sloganTitleWord, 8.5, { "13": 33 * 3 + 15 }, 0)

function sloganUpdate() {
    let html = "";
    for (let i = 0; i < sloganTitleWord.length; i++) {
        html += lettersTitleRu[Math.round(sloganTitleWord[i]) % 33]
    }
    sloganTitle.innerHTML = html.replace('А', ' ')
}

//main animation

let indexMainWindowMainAnimation = gsap.timeline()

indexMainWindowMainAnimation.to('.welcomeTitleLetter', 3, {
    opacity: 1,
    stagger: .4,
})


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



