const express = require("express")
const env = require("dotenv").config();
const app = express()
const studentRoute = require("./routes/student_route");
const postRoute = require("./routes/post_route");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const init = async () => {
    const db = mongoose.connection;
    db.on("error", (error) => console.log(error));
    db.once("open", () => console.log("Connected to database"));
    await mongoose.connect(process.env.DATABASE_URL);
    
    // Lets me get the body of a req, it makes the parsing
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    app.use("/student", studentRoute);
    app.use("/post", postRoute);
    return app;
}



module.exports = init;