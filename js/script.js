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

const nama = document.querySelector(".form-control.name").value;
const email = document.querySelector(".form-control.email").value;
const message = document.querySelector(".form-control.message").value;

function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "noorsyawal6@gmail.com",
        Password : "bengbeng112",
        To : 'noorsyawal6@gmail.com',
        From : nama,
        Subject : email,
        Body : `nama : ${nama} <br/> Email : ${email} <br/> Message : ${message}`
    }).then(
        message => alert("message sent successfully")
    );
}


console.log(sendEmail(email.send()));