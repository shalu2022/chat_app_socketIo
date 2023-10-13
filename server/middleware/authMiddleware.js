const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = expressAsyncHandler(async(req, res, next)=>{
 let token;
 if(req.headers.authorization){
    try {
        token = req.headers.authorization.split(" ")[1];
        const verifyUser = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.find(verifyUser.id).select("-password")
        console.log("user", req.user);
        next();
    }catch(err){
     res.status(401);
     throw new Error ("Not Authorized, No token found")
    }
 }
 if(!token){
    res.status(401);
    throw new Error ("Not Authorized, No token")
   }
})

module.exports = {auth}