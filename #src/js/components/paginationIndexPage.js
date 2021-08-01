let paginationLink = (btn, scrollElement) => {
    btn.forEach(link => {
        link.addEventListener('click', () => {
            gsap.to(window, {
                duration: 1,
                scrollTo: scrollElement,
                autoKill: false
            });
        })
    })
}

if (document.querySelector('.index__container')) {

//circle
    paginationLink(document.querySelectorAll('.index__paginationCircleMain'), 'min')
    paginationLink(document.querySelectorAll('.index__paginationCirclePortfolio'), document.querySelector('#mainIndexWindow').scrollWidth)
    paginationLink(document.querySelectorAll('.index__paginationCircleAbout'), 'max')
//arrow main window
    paginationLink(document.querySelectorAll('.index__paginationArrowMainRight'), document.querySelector('#mainIndexWindow').scrollWidth)
//arrow about
    paginationLink(document.querySelectorAll('.index__paginationArrowAboutLeft'), document.querySelector('#mainIndexWindow').scrollWidth)
//arrow portfolio
    paginationLink(document.querySelectorAll('.index__paginationArrowPortfolioLeft'), 'min')
    paginationLink(document.querySelectorAll('.index__paginationArrowPortfolioRight'), 'max')

}


