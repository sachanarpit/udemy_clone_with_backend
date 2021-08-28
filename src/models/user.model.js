const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, index: { unique: true }},
    password:{type:String, required:true},
    login:{type:Boolean, default:false},
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