const next = document.querySelectorAll('.scroll__down-arrow');
const slides = document.querySelectorAll('.slider__box');
const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('section');
const range = document.querySelector('#range');
let sliderTrack = document.querySelector('.slider-track')

const totalSlides = slides.length;

range.oninput = (() => {
    let rangeValue = range.value;
    sliderTrack.style.left = `-${rangeValue}px`;

})

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset);
    mainFn();

});

const active = (i) => {
    dots.forEach(dot => {
        dot.classList.remove('active')
    });
    dots[i].classList.add('active')
}

const mainFn = () => {
    if(window.pageYOffset < 300) {
        active(0)
    } else if (window.pageYOffset > 300 && window.pageYOffset < 1000) {
        active(1)
    } else {
        active(2)
    }
}
