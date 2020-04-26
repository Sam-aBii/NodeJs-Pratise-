console.log("Ascyn code example start")

setTimeout(() => console.log("Asycn code  after a pause of 2 seconds"),2000)

setTimeout(() => console.log("Asycn code  after a pause of 0 seconds"),0)

console.log(" Async code example end");

setTimeout(() => console.log("Asycn code  after a pause of 1 seconds"),1000)



// const request = require("request");

// const options = {
//     url: "https://jsonplaceholder.typicode.com/users"
// }

// request (options, (error,response) => {
//     console.log("error:", error)
//     console.log("status code:" , response && response.statusCode)
//     console.log("response:" , response && response.body)
// })
