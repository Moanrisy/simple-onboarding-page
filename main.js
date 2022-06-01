const onboardingContainer = document.querySelector(".onboarding-container")
const skipBtn = document.querySelector(".onboarding-container .skip-btn")
const steps = document.querySelector(".onboarding-container .steps")
const nextBtn = document.querySelector(".onboarding-container .next-btn")
const dots = document.querySelectorAll(".onboarding-container .dot")
const bgImage = document.querySelector(".bg-image")
const welcomePage = document.querySelector(".welcome")

setTimeout(function() {
    document.querySelector(".splash").style.display = "none"
    document.querySelector(".onboarding-container").classList.add("active")
}, 1000)

skipBtn.addEventListener("click", (e) => {
    e.preventDefault();
    onboardingContainer.classList.remove("active");
    welcomePage.classList.add("active")
})

nextBtn.addEventListener("click", () => {
    window.mySwipe.next();
    // remove onboarding when last item shown
    if(dots[3].classList.contains("active")) {
        skipBtn.click();
        welcomePage.classList.add("active")
    }
})

window.mySwipe = new Swipe(steps, {
    startSlide: 0,
    auto: 5000,
    draggable: true,
    autoRestart: false,
    continuous: false,
    disableScroll: true,
    stopPropagation: true,
    callback: function(index, element) {
        dots.forEach((e) => {
            e.classList.remove("active");
        })
        dots[index].classList.add("active")
        changeBackgroundImage(index)
    },
    transitionEnd: function(index, element) {}
});

function changeBackgroundImage(index) {
    const imagesUrl = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]
    bgImage.style.backgroundImage = `url('./img/${imagesUrl[index]}')`
}