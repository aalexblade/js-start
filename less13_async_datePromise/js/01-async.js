// Асинхронний код

// У синхронному коді така інструкція не може почати своє виконання,
// доки не виконається попередня.Тобто інструкції обробляються послідовно.

// console.log('first log')
// console.log('second log')
// console.log('third log')

// Наступний код - асинхронний.З функцією setTimeout() ми познайомимося
// далі.Зараз про неї нам потрібно знати тільки те, що вона приймає два
// параметри: callback - функцію, яка буде викликана після закінчення часу,
// який ми передаємо другим аргументом.

// Will run first
console.log("First log");

setTimeout(() => {
    // Will run last, after 2000 milliseconds
    console.log("Second log");
}, 2000);

// Will run second
console.log("Third log");