const express = require("express");
const router = express.Router();
const crudControllers = require("./crud.controller");
const Course = require("../models/course.model");

router.get("", crudControllers(Course).get);

module.exports = router;