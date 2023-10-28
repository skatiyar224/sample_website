Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", { videos: ["./assets/0.mp4", "./assets/2.mp4", "./assets/3.mp4"] });


gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".fleftelm")
Shery.imageEffect(".images", {
    style: 5,
    config: {"onMouse": { "value": 1 },"zindex": { "value": "0", "range": [-9999999, 9999999] }},
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index)
                }
            })
        })
    },
});
