/* MENU HAMBURGUER */
const line1 = document.getElementById('line-1')
const line2 = document.getElementById('line-2')
const line3 = document.getElementById('line-3')
const button = document.querySelector('.menu')
const header = document.querySelector('.menu-full')
const menuTl = gsap.timeline({ paused: true })
const links = document.querySelectorAll('.menu-full a')

button.addEventListener('click', () => {
  menuTl.reversed(!menuTl.reversed());
})

function initializeMenuAnimation() {
  /* menu */
  menuTl.to(line2, {
    opacity: 0,
    duration: .2
  }).to(line1, {
    top: '50%',
    transform: 'translateY(-50%)',
    duration: .2
  }, "<+=80%").to(line3, {
    bottom: '50%',
    transform: 'translateY(50%)',
    duration: .2
  }, "<").to(line1, {
    rotate: -45,
    duration: .2
  }).to(line3, {
    rotate: 45,
    duration: .2
  }, "<").to(header, {
    left: 0,
    duration: .4,
    ease: Expo.ease
  }, "<").to(links[0], {
    opacity: 1,
    transform: "translateX(0)"
  }, "<+=80%").to(links[1], {
    opacity: 1,
    transform: "translateX(0)"
  }, "<+=60%").to(links[2], {
    opacity: 1,
    transform: "translateX(0)"
  }, "<+=60%").reverse()
}

/* CURSOR */
const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (e) => {
  const y = e.clientY
  const x = e.clientX
  let widthCursor = cursor.clientWidth
  let heightCursor = cursor.clientHeight

  gsap.to(cursor, {
    x: x - widthCursor / 2,
    y: y - heightCursor / 2,
    duration: .3,
    ease: Expo.ease
  })
})



function textEnter() {
  gsap.to(cursor, {
    width: 120,
    height: 120,
    mixBlendMode: 'difference'
  })
}

function textLeave() {
  gsap.to(cursor, {
    width: 40,
    height: 40,
    mixBlendMode: 'normal'
  })
}


const title = document.querySelector('.container h1')

const allElementsWithTextAnimation = [
  title,
  button,
  ...links
]

function initializeTextAnimations(elements) {
  elements.forEach((element) => {
    element.addEventListener('mouseenter', textEnter)
    element.addEventListener('mouseleave', textLeave)
  })
}


/* STARTING ANIMATIONS */

initializeMenuAnimation()
initializeTextAnimations(allElementsWithTextAnimation)