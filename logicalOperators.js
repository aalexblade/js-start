// Запам'ятайте 6 хибних (falsy) значень, що приводяться до false 

// 0
// NaN
// null
// undefined
// ''
// false

// Очновні три логічні оператори

// && - and;
// || - or;
// ! - not;

// =========================================================
// && - and

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

// Тобто, логічне «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.

// console.log(1&&5);
// console.log(0&&2)
// console.log(NaN&&undefined)
// console.log(undefined&&NaN)
// console.log("Poli"&&"")
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// ===========================================================
// || - or; Або
// повернеться значення першого операнда, яке було приведене до true.

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// Тобто, логічне «АБО» зупиняється на правді і повертає те, на чому зупинилося або останній операнд.

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// Виконуючи логічне «АБО», правий операнд може не обчислюватися 
// у випадку, якщо лівий був приведений до true.

// =======================================================
// ! - not; логічний аператор ні

// Оператор ! приводить операнд до буля, якщо необхідно, а потім робить і
// нверсію - змінює його на протилежний true -> false або false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline;
console.log(isNotOnline)