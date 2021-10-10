// создаём div
let div = document.createElement('div');
// добавляем его на страницу
document.body.append(div);
// создаём заголовок
let h2 = document.createElement('h2');
// добавляем заголовок в div
div.append(h2);
// пишем текст в наш заголовок 2 уровня
// h2.innerHTML = 'Начинаем писать';
// задаём CSS параметры для div
div.style.textAlign = 'center';

// создаём цикл в цикле
for (let i = 0; i < 3; i++) {
    // новый цикл вложенный который создаёт звездочки
    for (let j = 0; j < 3; j++) {
        // проходит 6 раз
    h2.innerHTML += '*_ ';
    }
    // внутри 1 цикла каждый раз 
    h2.innerHTML += i + 1;
    
}
