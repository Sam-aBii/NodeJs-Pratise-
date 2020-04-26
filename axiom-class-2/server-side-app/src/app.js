const express = require("express")
const app = express();
const path = require("path");

const newPathToPublicFolder = path.join(__dirname,'../public');
console.log(newPathToPublicFolder);








console.log(__dirname);
console.log(__filename)


app.get("/" , (req,res) => {
    res.send("<h1>Wellcome to the express world</h1>")
})

app.get("/helloworld" , (req,res) => {
    res.send({
        name: "abid",
        age: 15
    })
})

app.get("/about" , (req,res) => {
    res.send("Wellcome to the about page")
})

app.listen(3000, () => {
    console.log(" server is up and listening to the port 3000")
})
