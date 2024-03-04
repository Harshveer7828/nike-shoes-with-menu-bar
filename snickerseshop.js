var menubar = document.querySelector("#menubar");
var icon = document.querySelector("#button button")
var flag = 0
icon.addEventListener("click", function () {
    if (flag === 0) {
        menubar.style.left = "0%"
        icon.innerHTML = '<i class="ri-close-line"></i>'
        icon.style.color = "black"
        flag = 1
    }
    else {
        icon.style.color = "black"
        menubar.style.left = "-50%"
        icon.innerHTML = '<i class="ri-menu-line"></i>'
        flag = 0
    }

})

gsap.from("#left1>img",{
    left:-800,
    duration:1,
    stagger:0.5
})
gsap.from("#left1>h1",{
    y:500,
    duration:0.5

})
gsap.from("#circletop",{
    scale:0
})


