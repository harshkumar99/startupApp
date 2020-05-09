const mongoose = require("mongoose");
const express = require("express");

const app = express();

//const DATABASE  = "mongodb://localhost:27017/testup";
const DATABASE  = "mongodb://mymongo:27017/testup";

mongoose.connect(DATABASE)
.then( () => {
    console.log("DB Connected...");  
} )
.catch( () => {
    console.log("ERROR: DB NOT Connected");
} );

app.get("/", (req, res) => {
    res.send("<h1>Welcome to a StartUpApp!!!!!!!!!!</h1>")
});

app.listen(8000, () => {
    console.log("8000 is ready to serve......")
});