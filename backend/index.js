//username and password
//organization
//issue
//board database
const express = require("express")
const user =[];
const organization=[];
const issue = [];
const app = express()
app.get("/", (req, res) => {
    res.send("Server is working!")
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})

