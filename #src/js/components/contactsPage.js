if (document.querySelector('.contacts')) {
    //ticker
    gsap.set('.contacts__ticker', {xPercent: -50})

    let tickerBoxWidth = 300,
        tickerTotalWidth = tickerBoxWidth * 8;  //  * n of boxes

    let tickerMod = gsap.utils.wrap(0, tickerTotalWidth)

    gsap.set('.contacts__ticker li', {x: (i) => i * tickerBoxWidth})

    gsap.timeline().to('.contacts__ticker li', 40, {
        x: "+=" + tickerTotalWidth,
        modifiers: {x: (x) => tickerMod(parseFloat(x)) + "px"},
        ease: 'none',
        repeat: -1,
    })

    //map
    DG.then(function () {
        map = DG.map('map', {
            center: [54.6265672097642, 39.74219261608884],
            zoom: 17
        });
        let myIcon = DG.icon({
            iconUrl: 'img/mapIcon.png',
            iconSize: [20, 30]
        });
        DG.marker([54.6265672097642, 39.74219261608884], {icon: myIcon}).addTo(map)
    })

    //animation open

    const contactsAnimation = gsap.timeline()

    if (window.innerWidth > 900) {

        contactsAnimation.to('.contacts__map', .5, {
            height: '100%',
            opacity: 1
        }, 0)

        contactsAnimation.to('.contacts__anim', .5, {
            transform: 'translateY(0)',
            opacity: 1,
            stagger: .3
        })

        contactsAnimation.to('.contacts__infoForm', .5, {
            width: '90%',
            opacity: 1
        })

        contactsAnimation.to('.contacts__ticker', .5, {
            opacity: 1
        })
    }
}
