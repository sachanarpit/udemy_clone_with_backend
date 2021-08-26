const mongoose = require("mongoose");
const connect = ()=>{
    return mongoose.connect("mongodb+srv://technophile:coder786@cluster0.e6osl.mongodb.net/udemy?retryWrites=true&w=majority");
};

module.exports = connect;