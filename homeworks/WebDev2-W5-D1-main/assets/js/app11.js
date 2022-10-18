const TimeLine = gsap.timeline({
    defaults: {
        duration: 1,
        autoAlpha: 0,
        // ease: "power4.out"
        ease: "bounce"
    },
    // repeat: -1,
    yoyo: true,
    paused: true,
    onComplete: () => console.log("COMPLETE"),
    onStart: () => console.log("STARTED")
})

setTimeout(() => {
    TimeLine.seek('endAnimation')
    TimeLine.play()
}, 1500)


TimeLine
.from('.img1', {  y: -50})
.from('.img2', {y: -50}) 
.from('.img3', { y: -50})
.addLabel('endAnimation', '-=2') 
.from('h1', { y: -50})  
.from('p', { y: -50}) 
.add(() => console.log("End of the timeline"))