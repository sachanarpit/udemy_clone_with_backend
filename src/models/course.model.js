const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    course_name:{type:String, required:[true, "Course Name is required"], unique:true},
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
    description:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
});

courseSchema.path("course_name").validate(async (name)=>{
    const count = await mongoose.models.course.countDocuments({name})
    return !count;
}, "This course is already available. Plaese use different name.");

const Course = mongoose.model("course", courseSchema);

module.exports = Course;