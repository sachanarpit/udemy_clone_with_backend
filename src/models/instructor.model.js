const mongoose = require("mongoose");
const instrutorSchema = new mongoose.Schema({
    name:{type:String, required:true},
    expertise:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"tag",
        required:false
    }],
    bio:{type:String, required:false}
},{
    versionKey:false,
    timestamps:true
});

const Instructor = mongoose.model("instructor", instrutorSchema);
module.exports = Instructor;