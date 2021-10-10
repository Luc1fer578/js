let a = 0;
console.log(a);

let array = []; // Мы объявили пустой массив 


// применяем метод push он добавляет в конец
array.push('Яблоко');
array.push('Груша');
array.push('Арбуз');
array.push('Банан');
array.push('Виноград');

console.log('array index 0: ', array[0]);
console.log('array index 1: ', array[1]);
console.log('array index 2: ', array[2]);
console.log('array index 3: ', array[3]);
console.log('array index 4: ', array[4]);

// метод для удаления последнего элемента массива
array.pop();

// метод shift удаляет первый элемент
array.shift();


console.log(array);
console.log('Количество элементов :', array.length);

let vegetables = [];
// метод unshift добавляет в начало массива
vegetables.unshift('Помидор');
vegetables.push('Огруец');
vegetables.push('Картофель');
vegetables.unshift('Петрушка');

console.log(vegetables);
console.log('Количество элементов :', vegetables.length);

for (let i = 0; i < array.length; i++) {
    console.log(i);
    console.log(array[i]);
}
console.log('==============================================');
for (let i = 0; i < vegetables.length; i++) {
    console.log(i);
    console.log(vegetables[i]);
}


console.log('==============================================');

console.log('Метод toString: ');

let nums = [];

for (let i = 1; i < 21; i++) {
    nums.push(i);
}

console.log(nums);

// метод join выводит массив в строку со своим разделителем
console.log(nums.join(','));

// применяем метод toString для преобразования массива в строку
let stroke = nums.toString();
console.log(stroke);



// проверяем тип данных наших переменных
let number = 23;
let notNumber = '23';
let boolean = true;

console.log(typeof(number));
console.log(typeof(notNumber));
console.log(typeof(boolean));

console.log('=============================================');
console.log('Метод slice :');

let b = 'С новым годом!';
console.log(b.slice(2, 13));

console.log('=============================================');
console.log('Метод reverse :');

console.log(nums.reverse());

console.log('=============================================');
console.log('Метод sort :');

// Метод sort сортирует от меньшего к большему по Unicode
let numSort = [9, 8, 7, 6, 4, 3, 1];
console.log(numSort);
console.log(numSort.sort());


let word = 'peterpen';

function palindrom (str) {
    return str === str.split('').reverse().join('');
}

console.log(palindrom('anna'));
console.log(palindrom('peterpen'));


let o = word.split('');
console.log(o);

let p = o.reverse();
console.log(p);

let l = p.join('');
console.log(l);

