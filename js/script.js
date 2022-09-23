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



const sendEmail = () => {

    const nama = document.querySelector(".form-control.name").value;
    const email = document.querySelector(".form-control.email").value;
    const message = document.querySelector(".form-control.message").value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "noorsyawal6@gmail.com",
        Password : "D056CAD662A9616F8A6934A80BAEADE5016D",
        To : "noorsyawal29@smk.belajar.id",
        From : "noorsyawal6@gmail.com",
        Subject : email,
        Body : `Nama : ${nama} <br/> Email : ${email} <br/> Message : ${message}`
    }).then(
        message => alert("Send Message Succesfully")
    );
}