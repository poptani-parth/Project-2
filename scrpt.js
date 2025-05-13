

function homepageAnimation() {
    gsap.set(".slideMarquee", {
        scale: 5
    });

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    })

    tl.to(".vdodiv", {
        '--clip': "0%",
        ease: "power2.out",
    }, 's')
        .to(".slideMarquee", {
            scale: 1,
            ease: "power2.out"
        }, 's')
        .to(".slideMarquee", {
            scale: 1,
            ease: "power2.out"
        }, 's')

        .to(".lft", {
            xPercent: -20,
            stagger: .03,
            ease: "power2t"
        }, 'lr')

        .to(".rgt", {
            xPercent: 20,
            stagger: .03,
            ease: "power2t"
        }, 'lr')
}

function realpageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",

            scrub: 1
        },
        xPercent: -200,
        ease: Power4
    })
}

function teamAnimation() {
    document.querySelectorAll(".listelem")
        .forEach(function (elem) {
            elem.addEventListener("mousemove", function (dets) {
                // console.log(gsap.util.mapRange(0, window.innerWidth, -200, 200, detl.ClientX))
                gsap.to(this.querySelector(".picture"), {
                    opacity: 1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                    ease: Power4,
                    duration: .5
                })
                gsap.to(this.querySelector(".bluelayer"), {
                    height: "100%",
                    ease: Power4,
                    duration: .03
                })
            })
            elem.addEventListener("mouseleave", function (detl) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 0,
                    ease: Power4,
                    duration: .5
                })
                gsap.to(this.querySelector(".bluelayer"), {
                    height: "0%",
                    ease: Power4,
                    duration: .03
                })
            })
        })
}

function paraAnimation() {
    var cutter = "";
    document.querySelector(".textParagraph")
        .textContent.split("").forEach(function (e) {
            if (e === " ")
                cutter += `<span>&nbsp;</span>`;
            cutter += `<span>${e}</span>`;
        })
    document.querySelector(".textParagraph").innerHTML = cutter;
    gsap.set(".textParagraph span", { opacity: .1 })
    gsap.to(".textParagraph span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 50%",
            end: "bottom 90%",
            scrub: .2
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })
}

function locomotive() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleAnimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 50%",
            end: "bottom 90%",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}

function bodycolorChange() {

    document.querySelectorAll(".section")
        .forEach(function (elem) {
            ScrollTrigger.create({
                trigger: elem,
                start: "top 50%",
                end: "bottom 50%",
                scrub: 1,
                onEnter: function () {
                    document.body.setAttribute("theme", elem.dataset.color);
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", elem.dataset.color);
                },
            })
        })
}

homepageAnimation();
realpageAnimation();
teamAnimation();
paraAnimation();
locomotive();
capsuleAnimation();
bodycolorChange();