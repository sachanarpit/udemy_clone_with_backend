const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    course_name:{type:String, required:true},
    teacher:{type:String, required:true},
    img:{type:String, required:true},
    rating:{type:Number, required:false},
    noOfRating:{type:Number, required:false},
    price:{type:Number, required:true},
    best:{type:Boolean, required:true},
    course_time:{type:Number, required:true},
    publish_date:{type:String, required:false},
    discreption:{type:String, required:true},
    point1:{type:String, required:true},
    point2:{type:String, required:false},
    point3:{type:String, required:false},
},{
    versionKey:false,
    timestamps:true
});

const Course = mongoose.model("course", courseSchema);

module.exports = Course;