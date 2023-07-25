

var t1 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1",
        start:'top 0%',
        end:"top -200%",
        scrub:1,
        pin:true
    }
})

t1.to(".scroll p",{
    transform:"translateX(-100%)",
    fontWeight:"200",
    color:"#C8A2C8",
})

t1.from(".page1 video",{
    scale:"0"
})

var t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"center 50%",
        end:"bottom -50%",
        pin:true,
        toggleActions:"play none none none",
        // scrub:true
    }
})

t2.to(".page2-text-left" ,{
    opacity:"1",
})

t2.to(".page2-text-right" ,{
    opacity:"1",
    // transform:"translateY(-50%)",
})



gsap.to(".hero1 img",{
    scrollTrigger:{
        trigger:".hero1",
        start:"10% 60%",
        end:"bottom 40%",
        // markers:true,
        scrub:true,
        pin:".page3"

    },
    height:"500px"
})

gsap.to(".hero2 img",{
    scrollTrigger:{
        trigger:".hero2",
        start:"10% 60%",
        end:"bottom 40%",
        // markers:true,
        scrub:1,
        pin:".page4"
    },
    height:"500px"
})

gsap.to(".hero3 img",{
    scrollTrigger:{
        trigger:".hero3",
        start:"10% 60%",
        end:"bottom 40%",
        // markers:true,
        scrub:1,
        pin:".page5"
    },
    height:"500px"
})


gsap.to(".page6" ,{
    scrollTrigger:{
        trigger:".page6",
        start:"top 10%",
        end:"bottom -200",
            // markers:true,
        delay:"0.5s"
    },
    backgroundColor:"black",
    color:"white"
})