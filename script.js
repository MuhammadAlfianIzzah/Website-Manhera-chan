const burger = document.getElementById('burger');
const li = document.getElementById('nav');
burger.addEventListener('click', function () {
    this.classList.toggle('click');
    li.classList.toggle('active');
});

let galery = document.querySelector('.galery');
let primary = document.querySelector('.primary img');

galery.addEventListener('click', function (e) {
    let imgTarget = e.target;
    let imgGalery = document.querySelectorAll('.imgGalery');
    let primary = document.querySelector('.imgPrimary');
    // console.log(primary);
    imgTarget.classList.add('fadein');
    setTimeout(() => {
        imgTarget.classList.remove('fadein');
    }, 500);
    imgGalery.forEach((e) => {

        if (e.classList.contains('active')) {
            e.classList.remove('active');
        }
    });
    if (imgTarget.classList.contains('imgGalery')) {
        imgTarget.classList.add('active');
        primary.src = imgTarget.src;
    }

    primary.classList = "imgPrimary";

});