const express = require("express");
const router = express.Router();

const Course = require("../models/course.model");

router.get("", async(req,res)=>{
    try{
        const course_data = await Course.find().populate({path:"instructors", select:"name"}).lean().exec();
        // console.log(course_data.instructors);
        return res.render("index", {
            data:course_data
        });
    }
    catch (err){
        return res.status(400).send(err.message).render(err.message);
    }
});

module.exports = router;