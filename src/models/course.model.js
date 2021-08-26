const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    course_name:{type:String, required:true},
    instructors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"instructor",
        required:true
    }],
    img:{type:String, required:true},
    rating:{type:Number, required:false},
    noOfRating:{type:Number, required:false},
    price:{type:Number, required:true},
    best:{type:Boolean, default:false},
    course_time:{type:Number, required:true},
    publish_date:{type:String, required:false},
    description:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
});

const Course = mongoose.model("course", courseSchema);

module.exports = Course;