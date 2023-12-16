//const test = require (express);

const login = (username, password) => {
    return `the user ${username} has logged in with password ${password} and is ready for registration`
}

let result = login("Michael", "123456")

console.log(result);