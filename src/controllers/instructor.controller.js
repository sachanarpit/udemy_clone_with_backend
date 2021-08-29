const express = require("express");
const router = express.Router();
const Instructor = require("../models/instructor.model");
const crudController = require("./crud.controller");

router.post("", crudController(Instructor).post);
router.delete("/:id", crudController(Instructor).deleteOne);
router.get("", async(req,res)=>{
    try{
        const tutor = await Instructor.find({}).populate("expertise").lean().exec();
        return res.status(200).send(tutor);
    }
    catch (err){
        return res.status(400).send(err.message);
    }
})

module.exports = router;