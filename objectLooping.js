// Object for ... in
// Array for ... off
// Object.keys
// Object.values
// Object.entries

// ============================================
// for ...in
// Object looping

// const likes = {
//     bad: 100,
//     neutral: 50,
//     goog: 15,
// }

// by keys
// for (let like in likes) {
//     console.log(like)
// }

// by values
// for (let key in likes) {
//     console.log(likes[key])
// }
// ==================================================
// Object.keys

// const likes = {
//     bad: 100,
//     neutral: 50,
//     goog: 15,
// }

// const keys = Object.keys(likes)
// console.log(keys)
// console.log(keys.length)

// =====================================================
// Object.values

// const likes = {
//     bad: 100,
//     neutral: 50,
//     goog: 15,
// }

// const values = Object.values(likes)
// console.log(values)

// let total = 0
// for (const item of values) {
//     total += item
// }
// console.log(total)

// =======================================================
// Object.entries
// const likes = {
//     bad: 100,
//     neutral: 50,
//     goog: 15,
// }
// const entries = Object.entries(likes)
// console.log(entries)
// console.log(entries.length)

// =======================================================
// Array of Objects looping
let items = [
    { id: "1", name: "bananes", price: 25, qty: 150, category: "fruits" },
    { id: "2", name: "apples", price: 18, qty: 450, category: "fruits" },
    { id: "3", name: "potato", price: 10, qty: 850, category: "vegetables" },
    { id: "4", name: "tomatoes", price: 35, qty: 378, category: "vegetables" },
];

// console.log(items)

// перебор масив обєктів
for (let item of items) {
    // console.log(item)
    // console.log(item.name)
    console.log(item.price)
    // console.log(item.category)
}