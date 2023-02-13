const mongoose = require('mongoose');
// url = ' ';

const connectDB = () => {
    console.log('connectDB');
    return (
        mongoose.set("strictQuery", false),
        mongoose.connect(url, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        );
}

module.exports = connectDB;