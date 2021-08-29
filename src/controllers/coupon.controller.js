const express = require("express");
const router = express.Router();
const Coupon = require("../models/coupon.model");
const crudController = require("./crud.controller");

router.get("", crudController(Coupon).get);
router.post("", crudController(Coupon).post);
router.delete("", crudController(Coupon).deleteOne);
router.patch("", crudController(Coupon).updateOne);

module.exports = router;