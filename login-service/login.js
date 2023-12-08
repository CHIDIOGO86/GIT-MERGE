//const test = require (express);

const login = (username, password) => {
    return `${username} has logged in with ${password}`
}

let result = login("test", "123456")

console.log(result);