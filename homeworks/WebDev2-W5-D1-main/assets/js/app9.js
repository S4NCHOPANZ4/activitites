const TimeLine = gsap.timeline()

TimeLine
.from('.img1', { autoAlpha: 0, duration: 1, y: -50})
.from('.img2', { autoAlpha: 0, duration: 1, y: -50}) 
.from('.img3', { autoAlpha: 0, duration: 1, y: -50})
.from('h1', { autoAlpha: 0, duration: 1, y: -50})  
.from('p', { autoAlpha: 0, duration: 1, y: -50})