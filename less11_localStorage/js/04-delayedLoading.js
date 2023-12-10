function multiply() {
    let total = 1;

    for (const argument of arguments) {
        console.log(argument)
        total += argument;
        ``
    }

    return total;
}

console.log(multiply(2, 1)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120