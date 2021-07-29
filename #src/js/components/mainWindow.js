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
