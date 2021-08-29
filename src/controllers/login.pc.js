const express = require("express");
const bodyParser = require('body-parser');
const { check, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/user.model");
const urlencodedParser = bodyParser.urlencoded({extended:false});

router.get("", (req,res)=>{
    try{
    res.render("pages/login",{
        alert:null,
        msg:null
    });
    }
    catch(err){
        res.status(400).send(err.message);
    }
})

router.post("", urlencodedParser, [
    check("email", "Email is required")
    .isLength({min:3}),
    check("password", "Password is required")
    .isLength({min:1})
], async (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const alert = errors.array();
            console.log(alert);
            res.render("pages/login", {
                alert,
                msg:null
            })
        }else{
            try{
                let userEmail = req.body.email;
                let userPss = req.body.password;
                const user = await User.findOne({email:userEmail}).lean().exec()
                
                if(user.length==0 || user.password!==userPss){
                        res.render("pages/login",{
                            alert:null,
                            msg:"Invaild credentials."
                        });
                }else{
                    const id = user._id;
                    const user2 = await User.findByIdAndUpdate(id, {
                        "login":true
                    }).lean()
                    // window.localStorage.setItem("user", JSON.stringify(user2));
                    res.redirect("/");
                }
            }
            catch(err){
                res.status(400).send(err.message);
            }
        }
})

module.exports = router;