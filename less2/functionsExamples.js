
// const des = ["covid", "ebola", "anthtrax"]

// function createData(des) {
//     const newDes = []

//     for (let i = 0; i < des.length; i += 1) {
//         newDes.push(des[i])

//     }
//     return newDes
// }

// createData(des)
// console.log(createData(des))

// =====================================
// const des = ["covid", "ebola", "anthtrax"]

// const readData = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// readData(des)

// U - update ===========================

// const des = ["covid", "ebola", "sick"]

// function updateData(des, itemToUpdate, newName) {
//     for (let item of des) {
//         if (item === itemToUpdate) {

//             let idx = des.indexOf(item)

//             des[idx] = newName
//         }
//     }
//     return des
// }

// console.log(updateData(des, "ebola", "american ebola"))

// D - delete ===================================
// const des = ["covid", "ebola", "sick"]

// function remuveDate(des, itemToRemuve) {
//     for (let item of des) {
//         if (item === itemToRemuve) {

//             let idx = des.indexOf(item)

//             des.splice(idx, 1)
//         }
//     }
//     return des
// }

// console.log(remuveDate(des, "ebola"))

// ================================================
// find small

let nums = [10, 23, 3, 34, 5, 6, -2, 9, 98]
function getSmallest(numsArr) {
    let min = numsArr[0]

    for (let i = 0; i < numsArr.length; i++) {
        if (numsArr[i] < min) {
            min = numsArr[i]

        }
    }
    return min;
}
console.log(getSmallest(nums))