/*
//username and password | USERS TABLE(DB)
//organization | ORGANISATION TABLE(DB)
//issue | ISSUE TABLE(DB)
//board database | BOARD TABLE(DB)
these are all the data schems used before building
*/


const express = require("express")
const jws = require("jsonwebtoken")
const {authmiddleware} = require ("/.middleware")
const USERS =[];
const ORGANISATION=[];
const ISSUE = [];
const BOARD =[];
let USERS_ID = 1;
let ORGANISATION_ID = 1;
let ISSUE_ID = 1;
let BOARD_ID = 1;
const app = express()
app.get("/", (req, res) => {
    res.send("Server is working!")
})
//never forget that if you want to acces the body of any end point you should use this middle ware
app.use(express.json())
// post endpoints we will  create here
app.post("/signup",function(req,res){
const username = req.body.username;
const password = req.body.password;
const usernameexist = USERS.find(u => u.username === username) 
if(usernameexist)
{
 return res.status(403).json({
    message : "user already exist"
 })
 return;
}
USERS.push(
    {
        username : username,
        password : password,
        ID : USERS_ID++
    }
)
res.json({
    message : "you have signed up"
})


})
app.post("/signin",function(req,res)
{ 
username = req.body.username
password = req.body.password
const usernameexist = USERS.find( u => u.username === username && u.password === password)
if(!usernameexist)
{
    res.status(403).json({
        message : "Invalid credential"
    })
    return;
}
const token = jws.sign({
    usersid : usernameexist.ID
},"atlantision1234")
res.json({
    token : token
})

})
app.post("/organisation",authmiddleware,function(req,res){

})
app.post("/ add-members-to-organisation",authmiddleware,function(req,res){

})
app.post("/boards",authmiddleware,function(req,res){

})
app.post("issue",authmiddlewareD,function(req,res){

})
// READ end point wehere user will see the things after submiting
app.get("/boards",authmiddleware,function(req,res){

})
app.get("/boards/oragnisation",authmiddleware,function(req,res){

})
app.get("/issue",authmiddleware,function(req,res){

})
app.get("/members",authmiddleware,function(req,res){

})
//delete end points
app.delete("/members",authmiddleware,function(req,res){
     
})
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})

