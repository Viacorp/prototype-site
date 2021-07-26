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
