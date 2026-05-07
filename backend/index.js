/*
//username and password | USERS TABLE(DB)
//organization | ORGANISATION TABLE(DB)
//issue | ISSUE TABLE(DB)
//board database | BOARD TABLE(DB)
these are all the data schems used before building
*/
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

