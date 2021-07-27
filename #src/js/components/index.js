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
