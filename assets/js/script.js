// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
// Get all nav-links
const navLinks = document.querySelectorAll('.nav-link');

menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle("change");
});

// Add event listener to close the navigation menu when a nav-link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Reset the navigation menu to its initial state by removing the 'change' class
        navbar.classList.remove('change');
        menu.classList.remove('change');
    });
});
// End of Navbar

// Connect Now Button
document.querySelector('.banner-btn').addEventListener('click', function () {
    window.location.href = '#contact';
});

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
    if (video.pauded) {
        btn.className = "far fa-play-circle";
        video.style.opacity = ".3";
    } else {
        btn.className = "far fa-pause-circle";
        video.style.opacity = "1";
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


