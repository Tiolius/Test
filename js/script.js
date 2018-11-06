/* Камень, ножницы, бумага
// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if((player === 0 && computer === 1) || (player === 1 && computer === 2) || (player === 2 && computer === 0)) {
	console.log('player win');
} else if(player === computer){
	console.log('draw');
} else{
	console.log('computer win');
}
*/

/* Модуль числа
let number = prompt('Number?');
if (number>=0) {
	console.log(number);
} else if (number < 0) {
  number = -number
  console.log(number)
} else console.log('Это не число!');*/

/* Использование Case
let answer = prompt('Введите имя музыканта');
answer = answer.toLocaleLowerCase();
switch(answer) {
	case 'dr.dre':
		console.log('rap');
		break;
	case 'jimmy hendrix':
		console.log('rock');
		break;
	case 'britney spears':
		console.log('pop');
		break;
	default:
		console.log('no such singer in database');
		break;
}*/

/* Функции
function sayHI () {
	return 'Hello';
}
function sayName(name){
	return 'Hi '+ name;
}
console.log(sayHI());
console.log(sayName('Mark'));
console.log(sayName('Tom'));
*/

/* Анонимная функция
let myFunc = function(element,color) {
	element.style.backgroundColor = color;
}
const heading = document.querySelector('h1');
const par = document.querySelector('p');
myFunc(heading, 'red');
myFunc(par, 'green');*/

/* Стрелочная функция
let myText = (element, text) => {
	element.innerHTML = text;
}

myText(document.body, 'Hello');*/

/* Задача про яблоки и хлеб
function Calculate (a,b,c){
  let b1 = b * (prompt('Стоимость одного яблока'));
  let c1 = c * (prompt('Стоимость батона'));
  let s = a > b1 + c1 ? 'Денег хватит' : 'Денег не хватит';
  return s;
}
let a = prompt('Денег с собой');
let b = prompt('Куплено яблок');
let c = prompt('Куплено хлеба');
console.log(Calculate (a,b,c)); */

/*Область видимости
var a = 'hi';
function myFunc(){
  a = 'hello';
  return a;
}

function myFunc2(){
  var b = 3;
  console.log(b);
}

console.log(a);
myFunc2();

if(true) {
  var c = 5;
  let d = 6;
}
console.log(c);
console.log(d); //ошибка */

/* События
const button = document.querySelector('button');
const par = document.querySelector('p');
let state = 'none';
button.addEventListener('click', function(){
  if(state === 'none'){
    par.style.display = 'block';
    state = 'block';
  } else {
    par.style.display = 'none';
    state = 'none'
  }

})*/

/* Разнообразие синтаксиса записи событий
window.addEventListener('load', function() {
  const button = document.querySelector('.button');
  const ball = document.querySelector('.ball');
  const par = document.querySelector('.show p');
  button.addEventListener('click', ()=>{
    ball.style.animationPlayState = 'running';
  })

  window.onscroll = () => {
    if(scrollY >= 1000){
      par.style.opacity = 1;
    } else {
      par.style.opacity = 0.5;
    }
  }

})*/

/* Контекст
window.onscroll = function() {console.log(this);};
const button = document.querySelector('.button');

button.onclick = function() {
  this.innerHTML = 'Pressed';
};

button.onclick = () => { // Контекст стрелочной функции всегда window
  console.log(this);
};*/

/* Отмена событий по умолчанию
const form = document.querySelector('form');
form.onsubmit = function(e) {
  e.preventDefault();
  console.log('Submitted');
}*/

/* Практика интерактивный макет
const request = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closepopup = document.querySelector('.closePopup')
const openmenu = document.querySelector('.openMenu');
const closemenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');
request.onclick = function() {
  popup.style.display = 'flex';
}
closepopup.onclick = function() {
  popup.style.display = 'none';
}
openmenu.onclick = function() {
  menu.style.left = 0;
}
closemenu.onclick = function() {
  menu.style.left = '-50vw';
}
*/

/*Math
let number = prompt('Введите число:');

function calc(num) {
  return Math.abs(num ** Math.floor(Math.random() * (10 - 1) + 1));
}

console.log(calc(number));

function moduleSquare(num) {
    return Math.abs(num)/2;
}
console.log(moduleSquare(-3));
console.log(moduleSquare(3));
console.log(Math.floor(2.456));
console.log(Math.round(2.456));
console.log(Math.random());
console.log(Math.floor(Math.random()*(10-5)+5));
*/

/*Объект
let person = {
  firstname : "Иван",
  lastname : "Иванов",
  age : 30,
  teacher : true,
  sayHello : function () {
    return 'Hello ' + this.firstname
  }
}

console.log(person.firstname)
console.log(person.sayHello());

person.canCode = true;
person.age = 29;
*/

/*Массивы
let people = ['Vasya','Petya','Sasha']
console.log(people);
console.log(people[2]);
people[2] = "Yura";
console.log(people[2]);
console.log(people.length);

let bigArray = [
    [1,2,3],
    [true,false],
    ['a','b','c']
]
console.log(bigArray[0][1]);

let bigObject = {
  name : ['Vasya','Petya','Sasha'],
  grades : [
    {
      intern: 1,
      junior : 2,
    },
    {
      middle: 3,
      senior: 2
    }
  ]
}

console.log(bigArray.name[1]);
console.log(bigArray.grades);
console.log(bigArray.grades[1].middle);
*/

/*Массив forms
const form = document.forms[0];
const insert = document.querySelector('.total')

form.onsubmit = function(e) {
  e.preventDefault();
  let calc = Math.sin(form.elements.quantility.value * Math.PI / 180);
  let result = calc.toFixed(5)
  insert.innerHTML = result;
}*/

/*Цикл while
const items = document.getElementsByTagName('li');
console.log(items);
let counter = 0;
while(counter < items.length) {
  items[counter].innerHTML = counter + 1;
  counter++;
}*/

/*Цикл for
for (let i = 1;i<100000; i++){
  if (i%6 === 0) console.log(i);
}
*/

/*Циклы for of и for in
const buttons = document.querySelectorAll('button');

let button;
for (button of buttons) {
  button.style.backgroundColor = 'red';
}

let person = {
  firstname: 'Stas',
  lastname: 'bozhenko',
  age: 30
}

let key;
for(key in person){
  console.log(person[key]);
}*/

/*Цикл forEach*/

