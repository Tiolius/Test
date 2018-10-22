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