// ==========================================
// Задание 1: Типы данных и переменные
// ==========================================

// 1.1 Инициализация переменных
const name = "Алим";
const age = 16;
const isStudent = true;
const hobbies = ["Программирование", "Футбол", "Автомобили"];

console.log("--- 1.1 ---");
console.log("Имя:", name);
console.log("Возраст:", age);
console.log("Студент:", isStudent);
console.log("Хобби:", hobbies);


// 1.2 Работа с числами
const num1 = 50;
const num2 = 10;

console.log("--- 1.2 ---");
console.log("Сумма:", num1 + num2);
console.log("Разность:", num1 - num2);
console.log("Произведение:", num1 * num2);
console.log("Частное:", num1 / num2);


// 1.3 Конкатенация строк
const personName = "John";
const personAge = 20;

console.log("--- 1.3 ---");
console.log(`${personName} is ${personAge} years old`);



// ==========================================
// Задание 2: Условные конструкции
// ==========================================

// 2.1 Определение статуса по возрасту
const userAge = 16; // Можешь менять значение для проверки

console.log("--- 2.1 ---");
if (userAge < 13) {
    console.log("Ребенок");
} else if (userAge >= 13 && userAge <= 17) {
    console.log("Подросток");
} else if (userAge >= 18 && userAge <= 65) {
    console.log("Взрослый");
} else {
    console.log("Пенсионер");
}


// 2.2 Проверка четности числа
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Четное";
    } else {
        return "Нечетное";
    }
}

console.log("--- 2.2 ---");
console.log("Число 4:", checkEvenOdd(4));
console.log("Число 7:", checkEvenOdd(7));


// 2.3 Проверка допуска на аттракцион
const rideAge = 15;
const rideHeight = 165; // в см

console.log("--- 2.3 ---");
if (rideAge < 5) {
    console.log("Слишком мал");
} else if (rideAge >= 5 && rideAge <= 12) {
    console.log("Добро пожаловать");
} else if ((rideAge >= 13 && rideAge <= 18) && rideHeight > 160) {
    console.log("Добро пожаловать");
} else {
    console.log("Не разрешено");
}// ==========================================
// Задание 1: Типы данных и переменные
// ==========================================

// 1.1 Инициализация переменных
const name = "Алим";
const age = 16;
const isStudent = true;
const hobbies = ["Программирование", "Футбол", "Автомобили"];

console.log("--- 1.1 ---");
console.log("Имя:", name);
console.log("Возраст:", age);
console.log("Студент:", isStudent);
console.log("Хобби:", hobbies);


// 1.2 Работа с числами
const num1 = 50;
const num2 = 10;

console.log("--- 1.2 ---");
console.log("Сумма:", num1 + num2);
console.log("Разность:", num1 - num2);
console.log("Произведение:", num1 * num2);
console.log("Частное:", num1 / num2);


// 1.3 Конкатенация строк
const personName = "John";
const personAge = 20;

console.log("--- 1.3 ---");
console.log(`${personName} is ${personAge} years old`);



// ==========================================
// Задание 2: Условные конструкции
// ==========================================

// 2.1 Определение статуса по возрасту
const userAge = 16; // Можешь менять значение для проверки

console.log("--- 2.1 ---");
if (userAge < 13) {
    console.log("Ребенок");
} else if (userAge >= 13 && userAge <= 17) {
    console.log("Подросток");
} else if (userAge >= 18 && userAge <= 65) {
    console.log("Взрослый");
} else {
    console.log("Пенсионер");
}


// 2.2 Проверка четности числа
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Четное";
    } else {
        return "Нечетное";
    }
}

console.log("--- 2.2 ---");
console.log("Число 4:", checkEvenOdd(4));
console.log("Число 7:", checkEvenOdd(7));


// 2.3 Проверка допуска на аттракцион
const rideAge = 15;
const rideHeight = 165; // в см

console.log("--- 2.3 ---");
if (rideAge < 5) {
    console.log("Слишком мал");
} else if (rideAge >= 5 && rideAge <= 12) {
    console.log("Добро пожаловать");
} else if ((rideAge >= 13 && rideAge <= 18) && rideHeight > 160) {
    console.log("Добро пожаловать");
} else {
    console.log("Не разрешено");
}






// ==========================================
// Задание 3: Циклы и функции
// ==========================================

// 3.1 Таблица умножения на 7
console.log("--- 3.1 Таблица умножения на 7 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}


// 3.2 Сумма чисел от 1 до n
function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log("--- 3.2 Сумма чисел ---");
console.log("Для n = 5:", sumNumbers(5)); // Выведет 15


// 3.3 Обратный отсчет от 20 до 1 с помощью цикла while
console.log("--- 3.3 Обратный отсчет ---");
let countdown = 20;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}






// ==========================================
// Задание 4: Массивы и циклы
// ==========================================

// 4.1 Обработка оценок
const grades = [5, 4, 3, 5, 2, 4, 5];

console.log("--- 4.1 Все оценки ---");
for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
}

let gradesSum = 0;
let maxGrade = grades[0];

for (let i = 0; i < grades.length; i++) {
    gradesSum += grades[i];
    if (grades[i] > maxGrade) {
        maxGrade = grades[i];
    }
}

let averageGrade = gradesSum / grades.length;

console.log("Сумма оценок:", gradesSum);
console.log("Средняя оценка:", averageGrade);
console.log("Максимальная оценка:", maxGrade);


// 4.2 Фильтрация четных чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("--- 4.2 Четные числа ---");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


// 4.3 Работа с городами
const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];

function findCity(arr, city) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === city) {
            return i; // Возвращаем индекс, если нашли
        }
    }
    return -1; // Если не нашли
}

console.log("--- 4.3 Поиск городов ---");
console.log("Индекс Ош:", findCity(cities, "Ош"));         // Выведет 1
console.log("Индекс Талас:", findCity(cities, "Талас"));   // Выведет -1










// ==========================================
// Задание 5: Объекты и массивы объектов
// ==========================================

// --- 5.1 Объект student ---
const student = {
    name: "Алим",
    age: 16,
    courses: ["JavaScript", "HTML/CSS", "Python"],
    isActive: true
};

console.log("--- 5.1 Информация о студенте ---");
console.log("Вся информация:", student);

// Обновляем возраст на 1 (увеличиваем на 1 год)
student.age += 1;
console.log("Обновленный возраст:", student.age);

console.log("Список курсов:");
for (let i = 0; i < student.courses.length; i++) {
    console.log(student.courses[i]);
}


// --- 5.2 Объект товара ---
const product = {
    name: "Ноутбук",
    price: 45000,
    quantity: 3
};

function getTotalCost(item) {
    const total = item.price * item.quantity;
    console.log(`Товар: ${item.name}, Общая стоимость: ${total}`);
    return total;
}

console.log("--- 5.2 Стоимость товара ---");
getTotalCost(product);


// --- 5.3 Массив объектов (книги) ---
const books = [
    { title: "Богатый папа, бедный папа", author: "Роберт Кийосаки", year: 1997 },
    { title: "Самый богатый человек в Вавилоне", author: "Джордж Сэмюэль Клейсон", year: 1926 },
    { title: "Чистый код", author: "Роберт Мартин", year: 2008 }
];

console.log("--- 5.3 Информация о книгах ---");
console.log("Все книги:");
for (let i = 0; i < books.length; i++) {
    console.log(`Название: "${books.title}", Автор: ${books.author}, Год: ${books.year}`);
}

// Находим самую старую книгу (с наименьшим годом)
let oldestBook = books[0];
for (let i = 1; i < books.length; i++) {
    if (books[i].year < oldestBook.year) {
        oldestBook = books[i];
    }
}

console.log("Самая старая книга:", oldestBook.title, `(${oldestBook.year} год)`);





// ==========================================
// Задание 6: Функции и ES6 синтаксис
// ==========================================

// 6.1 Расчет скидки (стрелочная функция)
const calculateDiscount = (price, discount) => {
    return price - (price * discount / 100);
};

console.log("--- 6.1 Расчет скидки ---");
console.log("Цена 1000 со скидкой 20%:", calculateDiscount(1000, 20));
console.log("Цена 5000 со скидкой 15%:", calculateDiscount(5000, 15));


// 6.2 Определение оценки
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 60 && score <= 79) {
        return "B";
    } else if (score >= 40 && score <= 59) {
        return "C";
    } else if (score >= 0 && score <= 39) {
        return "F";
    } else {
        return "Некорректный балл";
    }
}

console.log("--- 6.2 Определение оценки ---");
console.log("Балл 85:", getGrade(85));
console.log("Балл 68:", getGrade(68));
console.log("Балл 45:", getGrade(45));
console.log("Балл 20:", getGrade(20));


// 6.3 Функция для поиска максимального числа в массиве
function getMaxNumber(arr) {
    if (arr.length === 0) return null;
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("--- 6.3 Максимальное число в массиве ---");
const numbers1 = [12, 45, 7, 89, 23];
const numbers2 = [-5, -12, -3, -42];

console.log("Максимум в [12, 45, 7, 89, 23]:", getMaxNumber(numbers1));
console.log("Максимум в [-5, -12, -3, -42]:", getMaxNumber(numbers2));