const img1 = document.querySelector('.img1')

//using utility methods
const tween = gsap.to('.img2', { y: 200, paused: true })

// setTimeout(() => {
//     tween.resume()
// },2000)

tween.kill()
tween.resume()
tween.delay(1)
tween.duration(4)

const tween2 = gsap.to('.img3', {
    y: 200,
    paused: true,
    duration: 5
})

setTimeout(() => {
    tween2.seek(2.5)
    tween2.play()
}, 1500)