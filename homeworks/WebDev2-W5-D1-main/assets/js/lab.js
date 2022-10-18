

const nav = document.querySelector('.menu-links')
const title = document.querySelector('.logo')
const mainTitle = document.querySelector('.title')



const TimeLine = gsap.timeline()
TimeLine
.from(nav ,{x: -100, autoAlpha: 0, duration: 1})
.from(title ,{x: -100, autoAlpha: 0, duration: 1}, "-=1")
.from(mainTitle ,{y: 100, autoAlpha: 0, duration: 1})
.from('.tagline',{y: 100, autoAlpha: 0, duration: 1})
.from('p', {y: 100, autoAlpha: 0, duration: 1},"-=1")
.from('.beer', {y: -1000,  duration: .5})







