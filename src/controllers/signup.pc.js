const express = require("express");
const bodyParser = require('body-parser');
const { check, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/user.model");
const urlencodedParser = bodyParser.urlencoded({extended:false});

router.get("", (req,res)=>{
    try{
    res.render("pages/signup",{
        alert:null,
        msg:null
    });
    }
    catch(err){
        res.status(400).send(err.message);
    }
})

router.post("", urlencodedParser, [
    check("name", "Name is not valid, 3+ characters required")
    .isLength({min:3}),
    check("email", "Email is required")
    .isLength({min:3}),
    check("email", "Email is not valid")
    .isEmail()
    .normalizeEmail(),
    check("password", "Password is required")
    .isLength({min:1}),
    check("password", "Enter minimum 4 characters")
    .isLength({min:4})

], async (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const alert = errors.array();
            res.render("pages/signup", {
                alert,
                msg:null
            })
        }else{
            try{
                let userEmail = req.body.email;
                const user = await User.find({email:userEmail}).lean().exec()
                if(user.length>0){
                        res.render("pages/signup",{
                        alert:null,
                        msg:`Welcome back ${user[0].name}, you are already registered.`
                    });
                }else{
                    const user = await User.create(req.body);
                    res.render("pages/login",{
                        alert:null,
                        msg:null
                    });
                    res.send(user)
                }
                
            }
            catch(err){
                res.status(400).send(err.message);
            }
        }
})

module.exports = router;