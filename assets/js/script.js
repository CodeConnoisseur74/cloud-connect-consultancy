// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle("change");
});
// End of Navbar

// Video Section
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons i");
const bar = document.querySelector(".video-bar");

const playPause = () => {
    if (video.paused) {
        video.play();
        btn.className = "far fa-pause-circle";
        video.style.opacity = "1";
    } else {
        video.pause();
        btn.className = "far fa-play-circle";
        video.style.opacity = ".3";
    }
};

btn.addEventListener("click", () => {
    playPause();
});

video.addEventListener("timeupdate", () => {
    const barWidth = video.currentTime / video.duration;
    bar.style.width = `${barWidth * 100}%`;
    if (video.ended) {
        btn.className = "far fa-play-circle";
        video.style.opacity = ".3";
    }
});
// End of Video Section

// Card Section
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});
// End of Card Section

// Footer Copyright
// Create a new function called newDate()
function newDate() {
    //return a new Date() -- returns the current calendar year.
    return new Date().getFullYear();
}
// after everything else has loaded on the page, load this command: find the element (like a <span>) with the ID of 'autoupdate' and insert the dash '-' and the result of the newDate() function that returns the current calendar year.  (ie. '-2017' or whatever the current calendar year is)
document.onload = document.getElementById("autodate").innerHTML = '-' + newDate();

