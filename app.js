const btnDown = document.querySelector('.btn--down');
const btnUp = document.querySelector('.btn--up');
const sidebar = document.querySelector('.sidebar');
const slider = document.querySelector('.slider');
const container = document.querySelector('.container');
const slidesCount = slider.querySelectorAll('.slide').length;
sidebar.style.top = `-${(slidesCount-1) * 100}vh`;
let activeSlideIndex = 0;

btnUp.addEventListener('click', () => {
    changeSlide('up');
});

btnDown.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }
    const containerHeight = container.clientHeight

    slider.style.transform = `translateY(-${activeSlideIndex * containerHeight}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * containerHeight}px)`;
}