const fs = require("fs")

console.log("start from here")

fs.readFile("text.txt", function(err, data){
    if(err){
        console.log(err);
    }
    setTimeout(() =>{
        console.log("display after 2 seconds")
    },2000)
})

console.log("end here"); 

