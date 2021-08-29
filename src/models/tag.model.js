const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name:{type:String, required:true, index: { unique: true }}
},{
    versionKey:false,
    timestamps:true
});

const Tag = mongoose.model("tag", schema);

module.exports = Tag;