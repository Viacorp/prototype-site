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
