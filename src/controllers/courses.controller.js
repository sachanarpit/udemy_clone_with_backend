const express = require("express");
const router = express.Router();
const crudControllers = require("./crud.controller");
const Course = require("../models/course.model");

router.get("", crudControllers(Course).get);
router.post("", crudControllers(Course).post);

module.exports = router;