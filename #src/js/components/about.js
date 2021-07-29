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
