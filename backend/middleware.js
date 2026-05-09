const { json } = require("express");
const jwt = require("jsonwebtoken")
function authmiddleware(req,res,next)
{
const token = req.header.token
const decode = jwt.verify(token,"atlantision1234")
const usersid = decode.usersid;
if(usersid){
    req.usersid;
    next();
}
else{
    return res.status(403).json({
        message : "token not found"
    })
}
}
module.exports = {
  authmiddleware: authmiddleware
}