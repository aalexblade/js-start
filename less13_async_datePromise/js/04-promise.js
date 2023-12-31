// Проміс може бути у трьох станах:

// Очікування(pending) - початковий стан під час створення промісу.
// Виконано(fulfilled) - операція виконана успішно з будь - яким результатом.
// Відхилено(rejected) - операція відхилена з помилкою.

// Change value of isSuccess variable to call resolve or reject
const fetchUserFromServer = username => {
    return new Promise((resolve, reject) => {
        console.log(`Fetching data for ${username}`);

        setTimeout(() => {
            // Change value of isSuccess variable to simulate request status
            const isSuccess = true;

            if (isSuccess) {
                resolve("success value");
            } else {
                reject("error");
            }
        }, 2000);
    });
};

fetchUserFromServer("Mango")
    .then(user => console.log(user))
    .catch(error => console.error(error));

// ===============================================
const promise = new Promise((resolve) => {
    resolve(10)
})

promise.then(value => {
    return new Promise(resolve => {
        resolve(value * 2)
    })
}).then(value => console.log(value))

