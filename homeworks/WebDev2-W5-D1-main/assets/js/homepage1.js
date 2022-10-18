window.addEventListener('load', revealAnimation)

function revealAnimation(){

    const Timeline = gsap.timeline()

    //duration by default is 0.5s
    Timeline
    .from('h1', { autoAlpha: 0, y: -50 }) 
    .to('.middle-line', { height: 200 }, '-=0.2')
    .from('.home-content img', {autoAlpha: 0, y: -50 }, '-=0.2') 
    .from('.home-content button', {autoAlpha: 0, y: -50 }, '-=0.2') 
    .from('nav a', {autoAlpha: 0, y: -50, stagger: 0.3 }, '-=0.2') 
    .from('nav img', {autoAlpha: 0, y: -50}) 

}