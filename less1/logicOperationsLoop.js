// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let userInput = prompt("Enter Name");
// let nameToSearch = "Sara";

// if (userInput === nameToSearch) {
//   console.log("User is Logined");
// } else{
//     console.log('Not logined')
// }

let userInput = null;
let nameToScrean = "Sara";

for (let i = 3; i > 0; --i) {
  console.log(`Лишилось спроб ${i}`);

  userInput = prompt("Enter name");

  if (!userInput) {
    console.log("Cenceled");
    break;
  }

  if (userInput === nameToScrean) {
    console.log("Login success");
    break;
  }
}
