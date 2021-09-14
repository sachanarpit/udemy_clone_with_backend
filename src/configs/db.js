const mongoose = require("mongoose");
let psd = "ux0QRQZ4llYCIlf0";
const connect = ()=>{
    return mongoose.connect(
        `mongodb+srv://technophile:${psd}@cluster0.e6osl.mongodb.net/udemy?retryWrites=true&w=majority`
        );
};

module.exports = connect;
