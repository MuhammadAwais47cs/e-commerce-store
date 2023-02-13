const mongoose = require('mongoose');
url = 'mongodb+srv://admin:admin@cluster0.rzbahaf.mongodb.net/Cluster0?retryWrites=true&w=majority';

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