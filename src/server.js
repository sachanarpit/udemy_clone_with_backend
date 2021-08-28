const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
const fs = require('fs');
const path = require("path");
const ejs = require("ejs");
const app = express();
app.use(express.json());
const connect = require("./configs/db");
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
// app.use(expressLayouts);

app.set("views", path.join(__dirname, "views"));

// app.set("layout", "./views/layouts/main.layout");
app.set("view engine", "ejs");

const courseController = require("./controllers/course.controller");
const instructorController = require("./controllers/instructor.controller");
const couponController = require("./controllers/coupon.controller");
const userController = require("./controllers/user.controller");
const tagController = require("./controllers/tag.controller");

const indexPC = require("./controllers/home.pc");


app.use("/courses", courseController);
app.use("/instructors", instructorController);
app.use("/coupons", couponController);
app.use("/users", userController);
app.use("/tags", tagController);

app.use("/", indexPC);
// app.get("/", (req,res)=>{
//     return res.render("index");
// })
app.get("/cart", (req,res)=>{
    return res.render("pages/cart");
})
app.get("/product", (req,res)=>{
    return res.render("pages/product");
})
app.get("/categories", (req,res)=>{
    return res.render("pages/categories");
})
app.get("/login", (req,res)=>{
    return res.render("pages/login");
})
app.get("/signup", (req,res)=>{
    return res.render("pages/signup");
})
app.get("/checkout", (req,res)=>{
    return res.render("pages/checkout");
})
app.get("/payment-success", (req,res)=>{
    return res.render("pages/paySuccess");
})

app.get("/header", (req,res)=>{
    return res.render("partials/header");
})



let listener = app.listen(1777, async ()=>{
    await connect();
    console.log(`Listening on Port --> ${listener.address().port}`);
})