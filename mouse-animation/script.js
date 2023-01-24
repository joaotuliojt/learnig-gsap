const cursor = document.querySelector('.cursor')
const text = document.querySelector('.text')


let mouseWidth = 20;
let mouseHeight = 20;

document.addEventListener('mousemove', (e) => {
  const posX = e.clientX
  const posY = e.clientY
  gsap.to(cursor, {
    x: posX - mouseWidth,
    y: posY - mouseHeight,
    duration: .3,
    ease: Expo.ease
  })
})

text.addEventListener('mouseenter', (e) => {
  mouseWidth = 60
  mouseHeight = 60

  gsap.to(cursor, {
    width: 120,
    height: 120,
    mixBlendMode: 'difference'
  })
})

text.addEventListener('mouseleave', (e) => {
  mouseWidth = 20
  mouseHeight = 20

  gsap.to(cursor, {
    width: 40,
    height: 40,
    mixBlendMode: 'normal'
  })
})