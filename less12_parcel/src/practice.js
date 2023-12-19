// Потрібно створити лічільник кас, на якій касі найшвидше обслуговуванни
// 1 перший параметр масив , кількість елементів це кількість покупців, 
// значення елементу масиву це час який покупець витрачає на касі
// 2 другий параметр це кількість кас.Повертає обєкт де ключ це номер каси, 
// значення це час на касі

// 12 + 2 + 5 + 15=29
// 3 + 5 + 6 + 7=21
// { 1: 29, 2: 21 }



function fn(arr, cash) {
    const obj = {}

    for (let i = 1; i <= cash; i += 1) {
        obj[i] = 0
    }
    console.log(obj)

    arr.forEach(bayer => {
        const values = Object.values(obj)
        const minValue = Math.min(...values)
        const currentCase = values.indexOf(minValue) + 1
        obj[currentCase] += bayer
    });
    return obj
}

console.log(fn([12, 3, 5, 6, 2, 15, 7], 2))