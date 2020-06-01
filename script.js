const burger = document.getElementById('burger');
const li = document.getElementById('nav');
burger.addEventListener('click', function () {
    this.classList.toggle('click');
    li.classList.toggle('active');
});