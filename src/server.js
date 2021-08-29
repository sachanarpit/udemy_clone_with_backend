const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const connect = require("./configs/db");

app.use(express.static('public'));


app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");


const courseController = require("./controllers/course.controller");
const instructorController = require("./controllers/instructor.controller");
const couponController = require("./controllers/coupon.controller");
const userController = require("./controllers/user.controller");
const tagController = require("./controllers/tag.controller");

const indexPC = require("./controllers/home.pc");
const signupPC = require("./controllers/signup.pc");
const loginPC = require("./controllers/login.pc")


app.use("/courses", courseController);
app.use("/instructors", instructorController);
app.use("/coupons", couponController);
app.use("/users", userController);
app.use("/tags", tagController);

app.use("/", indexPC);
app.use("/signup", signupPC);
app.use("/login", loginPC);

app.get("/cart", (req,res)=>{
    return res.render("pages/cart");
})
app.get("/product", (req,res)=>{
    return res.render("pages/product");
})
app.get("/categories", (req,res)=>{
    return res.render("pages/categories");
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