const express = require("express");
const router = express.Router();
const crudControllers = require("./crud.controller");
const Course = require("../models/course.model");
const Instructor = require("../models/instructor.model");


router.get("", async(req,res)=>{
    try{
        const courses = await Course.find().populate("instructors").lean().exec()
        courses.forEach((x)=>{
            let tutors = "";
            x.instructors.forEach((x)=>{
            tutors+=x.name+" ";
            });
            return x.instructors = tutors;
        });
        return res.status(200).send(courses);
    }
    catch(err){
        return res.status(400).send(err.message);
    }
});
router.post("", crudControllers(Course).post);
router.patch("/:id", crudControllers(Course).updateOne);
router.delete("/:id", crudControllers(Course).deleteOne);

module.exports = router;