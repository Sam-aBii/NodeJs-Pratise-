    // the function calling from msg file

    const printMsg = require("./msg")


    let msg = printMsg()
    
    console.log(msg);

  /*  ************************************************************************************************* */

    //  validator  // 

// const validator = require("validator");

// const myEmail = "abc@gmail.abc"

// console.log(validator.isEmail(myEmail));

  /*  ************************************************************************************************* */

   // Chalk  (Terminal string styling done right)

// const chalk = require("chalk");
// console.log(chalk.bgGreen.red.bold.italic("Hello Brother its a chalk npm library"))


/****************************************************************************************************** */

// console.log(process.argv.username);

// const yargs = require("yargs")

// console.log(yargs.argv.username);

// console.log(yargs.argv.title);


/****************************************************************************************************** */

// const fs = require("fs");

// const myObj = {
//   name: "Abid Mukhtar",
//   city: "Multan",
//   Country: "Pakistan",
//   CLass: "NodeJS"
// };

// const newConvertedObj = JSON.stringify(myObj);
// console.log(myObj.city);
// console.log(newConvertedObj);
// try {
//   const dataRecvd = fs.readFileSync("data.txt");
//   const parseData =  JSON.parse (dataRecvd);

// console.log(dataRecvd.toString())
// console.log(parseData);
  
// } catch (e) {
//   console.log("Error Occurred", e.message)
// }

/****************************************************************************************************** */

// const http = require('http');     
// http.createServer((request, response) => {
                          
// response.writeHead(200, {
// 'Content-Type': 'text/plain'
// });
// response.write('Hello, World!\n');
// response.end();
// }).listen(1337); 


// console.log(module);

/**************************************************************************************************/