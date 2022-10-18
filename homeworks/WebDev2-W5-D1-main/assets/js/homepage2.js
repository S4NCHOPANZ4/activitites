const btnRight = document.querySelector('.btn-next')
const btnLeft = document.querySelector('.btn-prev')
const container = document.querySelector('.container')
const slides = Array.from(document.querySelectorAll('.slide'))
const indexIndicator = document.querySelector(".counter span:nth-child(1)")
let index = 0;

function animateRight(){
    const TimeLimeRight = gsap.timeline()

    TimeLimeRight.to(slides[index], { x: 0, duration: 0.5 })
}
function animateLeft(){
    const TimeLimeLeft = gsap.timeline()

    TimeLimeLeft.to(slides[index], { x: "-100%", duration: 0.5 })
}

function handleDirection(direction){
    if(direction === "next"){
        if(index === slides.length - 1){
            return
        }
        index++
        animateRight()
    }else{
        console.log(direction);
        if(index === 0){
            return
        }
        animateLeft()
        index--
    }
}

btnRight.addEventListener('click', () => handleDirection("next"))
btnLeft.addEventListener('click', () => handleDirection("prev"))