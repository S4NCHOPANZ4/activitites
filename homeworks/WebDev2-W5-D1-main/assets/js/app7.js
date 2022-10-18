const img1 = document.querySelector('.img1')

//save a tween
gsap.registerEffect({
    name: 'imgAnimation',
    effect: (targets, config) => {
        return gsap.to(targets,{
            duration: config.duration,
            y: 200,
            scale: 1.4,
            rotate: 360
        })
    }
})

gsap.effects.imgAnimation(img1, { duration: 5})
gsap.effects.imgAnimation('.img2', { duration: 5})
gsap.effects.imgAnimation('.img3', { duration: 5})

setTimeout(() => {

    //setting a value
    // img1.style.backgroundColor = 1
    gsap.set(img1, { backgroundColor: "#fff"})
}, 1500)