// C - create
// R - read
// U - update
// D - delete

// let isMango = false; // C - create
// console.log(isMango) // R - read
// isMango = true;   // U - update
// delete isMango  // D - delete


// C - create ==========================

// const des = ["covid", "ebola", "anthtrax"]

// const newDes = []

// for (let i = 0; i < des.length; i += 1) {
//     newDes.push(des)
// }

// console.log(newDes)

// for of=====
// const des = ["covid", "ebola", "anthtrax"]

// const newDes = []

// for (const item of des) {
//     newDes.push(item)
// }

// console.log(newDes)

// R - read =============================

// const des = ["covid", "ebola", "anthtrax"]

// // for (let i = 0; i < des.length; i++) {
// //     console.log(des[i]);
// // }

// for (let item of des) {
//     console.log(item)
// }

// U - update ===========================

// const des = ["covid", "ebola", "sick"]

// for (let item of des) {
//     if (item === "ebola") {
//         // console.log("Find")

//         let idx = des.indexOf(item)
//         // console.log(idx)

//         des[idx] = "african ebola"
//     }
// }
// console.log(des)

// D - delete ===================================
const des = ["covid", "ebola", "sick"]

for (let item of des) {
    if (item === "ebola") {
        console.log("Find")

        let idx = des.indexOf(item)
        console.log(idx)

        des.splice(idx, 1)
    }
}
console.log(des)