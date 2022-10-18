const img1 = document.querySelector('.img1')

gsap.from(img1, {
    autoAlpha: 0,
    duration: 2,
    y: -100,
    ease: "power4.out",
    repeat: -1,
    // yoyo: true,
    repeatDelay:2 // delay within each repeat
})