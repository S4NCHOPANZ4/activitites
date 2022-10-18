// const img1 = document.querySelector('.img1')

gsap.from('img', {
    autoAlpha: 0,
    duration: 2,
    y: -100,
    ease: "power4.out",
    stagger: {
        // each: 0.5,
        // amount: 1
        each: 0.5,
        from: "random"
    }
})

gsap.from('.btn', {
    duration: 0.5,
    autoAlpha: 0,
    stagger: 0.2, 
    // x: "random(-100, 100, 10)"
    y: "random([20,50,-60,-100, 100])"
})