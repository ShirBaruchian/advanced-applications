const dotenv = require("dotenv").config();
const init = require("./app.js")

init().then(app => {
    app.listen(process.env.PORT, () => {
        console.log(`example app listening on localhost:${process.env.PORT}`);
    })
})