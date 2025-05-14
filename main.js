//code to change the opacity of the background image while scrolling

document.addEventListener("scroll", function() {
    const image = document.getElementById("main-image");
    const scrollY = window.scrollY;
    const maxScroll = 400;
    const opacity = Math.max(1-scrollY / maxScroll, 0);
    image.style.opacity = opacity;
});