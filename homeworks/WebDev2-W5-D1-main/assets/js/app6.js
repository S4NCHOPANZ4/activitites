const img1 = document.querySelector('.img1')

// gsap.to(img1, { y: 50, autoAlpha: 1 })
// gsap.to(img1, { x: 100, autoAlpha: 1 })
// gsap.to(img1, { y: 150, autoAlpha: 1 })

gsap.to(img1, {
    keyframes: [
        { duration: 0.5, y: 50 },
        { duration: 0.5, x: 100 },
        { duration: 0.5, y: 150 }
    ],
    repeat: 2,
    onComplete: () => console.log("COMPLETED"),
    onStart: () => console.log("STARTED"),
    onUpdate: () => console.log("UPDATED"),
    onRepeat: () => console.log("REPEATED"),
})