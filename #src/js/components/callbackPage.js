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
