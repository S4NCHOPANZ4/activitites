/*
        gsap.to(".selector", { //selector text, array or object
            x: 100 
            delay
        })

        */
        gsap.to('.img1', { 
            x: 100,
            y: 100,
            duration: 0.9,
            delay: 5,
            backgroundColor: "#fff",
            // rotation: 45
            rotate: 45
        }) //tween

        const img2 = document.querySelector('.img2')

        gsap.to(img2, { x: 200 })

        const index = 3
        gsap.to(`.img${index}`, { y: 200 })