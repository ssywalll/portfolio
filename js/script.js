const loader = document.querySelector(".container-loader");

function loaderActive() {
    loader.classList.add("loader-active");
}

function loaderActiveTime() {
    setInterval(loaderActive, 2000);
}

window.onload = loaderActiveTime();

const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});