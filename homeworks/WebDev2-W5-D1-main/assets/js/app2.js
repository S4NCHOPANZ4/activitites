const img1 = document.querySelector('.img1')

// gsap.from(img1, { y: -300 })

//might cause a flashy effect bug
// gsap.from(img1, { y: -300, opacity: 0 })

//to solve the flashy effect bug below (change selector in css to visibility to hidden)
// gsap.from(img1, { y: -300, duration: 2, autoAlpha: 0 })

//rapid clicking will cause a bug
// document.querySelector('button').addEventListener('click', () => {
//     gsap.from(img1, { y: -300, duration: 1.5, autoAlpha: 0 })
// })

gsap.from(img1, {
    autoAlpha: 0,
    duration: 2,
    rotate: 45,
    y: -100,
    scale: 0.5
})