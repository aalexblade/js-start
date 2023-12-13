function multiply() {
    let total = 1;

    for (const argument of arguments) {
        console.log(argument)
        total += argument;
        ``
    }

    return total;
}

export { multiply }