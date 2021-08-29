const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    login:{type:Boolean, default:false},
    coursesInCart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courses",
        required:false
    }],
    coursesSaved:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courses",
        required:false
    }],
    wishlist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courses",
        required:false
    }],
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courses",
        required:false
    }]
},{
    versionKey:false,
    timestamps:true
});

const User = mongoose.model("user", schema);

module.exports = User;