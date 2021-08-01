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

    const closeCallbackWindow = (element) => {
        gsap.to(element, .5, {
            transform: 'translateX(100%)'
        })
    }

    document.getElementById('callbackNextStepName').addEventListener('click', () => {

        if (!document.getElementById('callbackNameInput').value.length) {
            gsap.to('.callback__name .callback__notInput', .5, {
                opacity: 1,
                visibility: 'visible'
            })
        }

        if (document.getElementById('callbackNameInput').value.length) {
            closeCallbackWindow('.callback__name')
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

//countdown
    const countdownFunc = () => {
        const countdown = {val: 4}, NewCountdown = 0;
        const countdownTimeline = gsap.timeline()

        countdownTimeline.to(countdown, 5, {
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
            closeCallbackWindow('.callback__phone')
            countdownFunc()
        }
    })
}
