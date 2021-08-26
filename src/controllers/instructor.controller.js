const express = require("express");
const router = express.Router();
const Instructor = require("../models/instructor.model");
const crudController = require("./crud.controller");

router.get("", crudController(Instructor).get);
router.post("", crudController(Instructor).post);

module.exports = router;