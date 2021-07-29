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

