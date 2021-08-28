const express = require("express");
const router = express.Router();
const Tag = require("../models/tag.model");
const crudController = require("./crud.controller");

router.get("", crudController(Tag).get);
router.post("", crudController(Tag).post);
router.delete("/:id", crudController(Tag).deleteOne);


module.exports = router;