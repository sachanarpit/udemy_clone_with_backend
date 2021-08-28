const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    code:{type:String, required:true, index: { unique: true }},
    value:{type:Number, required:true}
},{
    versionKey:false,
    timestamps:true
});

const Coupon = mongoose.model("coupon", schema);

module.exports = Coupon;