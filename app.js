const btnUp = document.querySelector('.btn--up');
const btnDown = document.querySelector('.btn--down');
const container = document.querySelector('container');
const slider = document.querySelector('.slider');
const sidebar = document.querySelector('.sidebar');
const slidesCount = slider.querySelectorAll('.slide').length;
const containerHeight = container.getClientRects;
let activeSlideIndex = 0;

sidebar.style.top = `${(slidesCount - 1) * 100}vh`;

btnUp.addEventListener('click', () => {
    changeSlide('up');
});

btnDown.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    sidebar.style.transform = translateY(-`${activeSlideIndex * containerHeight}px`);
    slider.style.transform = translateX(`${activeSlideIndex * containerHeight}px`);
}