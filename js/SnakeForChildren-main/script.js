// let i = 0;
// while (i < 10) {
//     console.log('i: ' + i);
//     i += 1
// }


// let result = prompt('Какое любимое животное у тебя?').toLowerCase(); 
// // сделать все буквы в нижний регистр

// if (result == 'корова') {
//     console.log('Муууууу');
// } else if (result == 'собака') {
//     console.log('Гав-гав');
// } else if (result == 'кошка') {
//     console.log('Мяу-мяу');
// }

// let i = 0;

// while (i < 4) {
//     let str = prompt('Какое число мы загадали?');

//     console.log('Вы ввели: ' + str);

//     i = i + 1;
//     // i++
// }


const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

let r = '255';
let g = '255';
let b = '0';
let delta = canvas.height / 100;

let x = 0;
let y = 0;

while (y <= (canvas.height - 40)) {
    x = 0;
    context.fillStyle = `rgb(${r}, ${g}, ${b})`;

    r = r + delta;
    g = g - delta;
    b = b - delta;

    while(x != (canvas.width - 20)) {
        context.fillRect(x, y, 19, 19);
        x += 20;
    }
    y += 20;
}
// передаем elementom аргумент
function changeBgColor(element, color) {
    element.style.backgroundColor = color; // задаем стиль фона красный
    
}

// const body = document.body; // весь документ присваиваем в body

// changeBgColor(body, 'grey');
// // вызываем наш див и присваиваем его в box
// const box = document.querySelector('.box');
// // поместили в аргументы box и цвет
// changeBgColor(box, 'black');

// let counter = 0;
// setInterval(function() {
//     console.log('counter', counter);
//     counter++;
// }, 1000);

// let x = 0, y = 0;
// context.fillStyle = 'purple';;
// setInterval(function() {
//     context.fillRect(x, y, 50, 50);
//     x += 2;
//     y += 2;
// }, 50)






// function foo(a, b) {
//     return a * b;
// }
// console.log(foo(15, 1));

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// context.fillStyle = 'yellow';
// context.fillRect(0, 30, 550, 30);
// // первые цифры отвечают за координаты X Y
// // вторые цифры отвечают за размер

// context.fillStyle = 'yellow';

// let i = 0;
// while(i != canvas.width - 20) {
//     context.fillRect(i, 0, 19, 19);
//     i += 20;
// }

// for (let i = 0; i != canvas.width - 20; i++) {
//     context.fillRect(i, 0, 19, 19);
//    i += 20;
// }