const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
/* Считаем кол-во слайдов (div) */
const slideCount = mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0
/* Сайдбару в свойство top задаём кол-во слайдов - 1 * на 100vh(полная высота) */
/* То есть, первая картинка слайда = последним слайдом sidebar */
sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slideCount){
            activeSlideIndex = 0
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slideCount - 1  
        }
    }

    const screenHeight = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * screenHeight}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * screenHeight}px)`
}