const startBtn = document.querySelector("#start");  // "кнопка" начало
const screens = document.querySelectorAll(".screen"); // каждое "окно"
const backBtn = document.querySelector("#backBtn"); // "кнопка" назад во втором "окне"
const backBtn2 = document.querySelector("#backBtn2"); // "кнопка" назад во втором "окне"
const timeList = document.querySelector("#time-list");  // список времеён для выбора на третьем "окне"
const timeLeft = document.querySelector("#time"); // время для "секундомера" на третьем "окне"
const board = document.querySelector('#board')  //поле для игры
const resultScore = document.getElementById('resultScore')


let time = 0;  // для "секундомера"
let score

startBtn.addEventListener("click", (event) => 
{
  event.preventDefault();   // чтоб не добавился # (href="#") в адресной строке при нажатии
  screens[0].classList.add("up");
});

backBtn.addEventListener("click", () => 
{
  screens[0].classList.remove("up");
});

backBtn2.addEventListener("click", () => 
{
  screens[1].classList.remove("up");
  score = 0
  const result = document.querySelector('#result')
  result.classList.add('hide')
  //console.log(result)
  finishGame()
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) // если у объекта есть класс "time-btn"
  {
    time = parseInt(event.target.getAttribute("data-time"));  // у этого объекта берём значение аттрибута data-time 
    screens[1].classList.add("up");
    timeLeft.classList.remove('hide')
    startGame();
  }
});

board.addEventListener('click', event => 
{
    score = 0
    if (event.target.classList.contains('circle'))  //если в board есть элемент с классом circle...
    {
        score++ 
        event.target.remove() // удаляем этот элемент
        createRandomCircle()  // и создаём новый
    }
})

function startGame() {
    setInterval(decreaseTime, 1000) //в определённое время делается какое-то действия (кождую секнду выпоняется фун-я decreaseTime)
    createRandomCircle()  // создаётся кружочек
    setTime(time) // установливается время секундомеру
}

function decreaseTime() {
    if (time === 0) 
    {
        finishGame()
    } 
    else 
    {
        let currentTime = --time  
        if (currentTime < 10) {
            currentTime = `0${currentTime}` //чтоб было 00:09, а не 00:9    
        }
        setTime(currentTime)  // установливается время секундомеру
    }
}

function setTime(value) {
    timeLeft.innerHTML = `00:${value}`  
}

function finishGame(){
    //board.innerHTML = 
    timeLeft.parentNode.classList.add('hide') //  Родителью элемента timeLeft добавляем класс hide 
}

function createRandomCircle() {
    const color = getRandColor()
    const circle = document.createElement('div')    /* создаём элемент div под именем circle */
    const size = getRandomNumber(10, 60) /* функция для генерирование сл. чисел в диапозоне */
    /* Дестуктуризация */
    const {width, height} = board.getBoundingClientRect() //берётся 2 значения "переменных" от board
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
        
    circle.classList.add('circle')    /* в div circle добовляем класс circle */
    circle.style.width = `${size}px`  //задаётся размер 
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`   // задаётся позиция 
    circle.style.left = `${x}px`
    circle.style.background = `${color}`
    board.append(circle) /* в div board добовляем div circle */
}

function getRandColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}

function getRandomNumber(min, max) {  // функция для генерации ранд чисел в диапазоне
    return Math.round(Math.random() * (max - min) + min)
}