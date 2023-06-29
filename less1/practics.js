// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення.
// Змінна pricePerItem зберігає ціну однієї одиниці товару, а
// orderedQuantity - кількість одиниць товару в замовленні.

// Оголошена змінна pricePerItem
// Значення змінної pricePerItem - це число 3500
// Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 4
// Оголошена змінна totalPrice
// Значення змінної totalPrice - це число 14000
// Використаний оператор *

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = ((pricePerDroid * orderedQuantity)+deliveryFee);

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// console.log(message);

// const light = "dlaksfjh";

// switch (light) {
//   case "green":
//     console.log("GO");
//     break;

//   case "yelow":
//     console.log("wait");
//     break;

//   case "red":
//     console.log("stop");
//     break;

//   default:
//     console.log("Broken!");
// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line

//   const totalPrice = pricePerDroid * orderedQuantity;

//   console.log(totalPrice);

//   if (totalPrice >= customerCredits) {
//     console.log("Insufficient funds!");
//   } else {
//     console.log(
//       `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
//     );
//   }

//   // Change code above this line
//   return message;
// }
// console.log(totalPrice);

// ===================================

// let cost;
// const subscription = "pro";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log(`Invalid subscription type - ${subscription}`);
// }

// console.log(cost); // 500;

// ========================================

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// =========================================

// if (type === "starter") {
//     price = 0;
//   } else if (type === "professional") {
//     price = 20;
//   } else if (type === "organization") {
//     price = 50;
//   }

// ============= рефакторінг if else -> switc case=====

// const password = null;

// switch (password) {
//   case null :
//     message = "Canceled by user!";
//     break;

//   case ADMIN_PASSWORD :
//     message = "Welcome!"
//     break;

//    default:
//     message = "Access denied, wrong password!"
// }

// if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
// ========рефакторінг if else -> switc case===== 2

// const country = China;

// switch (country) {
//   case "China":
//     message = `Shipping to ${country} will cost 100 credits`;
//     break;

//   case "Chile":
//     message = `Shipping to ${country} will cost 250 credits`;
//     break;

//   case "Australia":
//     message = `Shipping to ${country} will cost 170 credits`;
//     break;

//   case "Jamaica":
//     message = `Shipping to ${country} will cost 120 credits`;
//     break;

//   default:
//     message = "Sorry, there is no delivery to your country";
// }

// =============================length=====

const courseTopic = "JavaScript essentials";
console.log(courseTopic.slice(0, courseTopic.length))
