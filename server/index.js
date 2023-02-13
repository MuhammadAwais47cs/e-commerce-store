const app = require('./app');
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./config/connect.js')

// uncaught exceptions
process.on('uncaughtException', (err)=>{
    console.log(`Error :${err.message}`);
    console.log('Shutting down server due to uncaught exceptions');
    server.close(()=>process.exit(1));
})
//config
dotenv.config({path:'config/config.env'});
const server = app.listen(process.env.PORT , ()=>{
    console.log(`server is working on port ${process.env.PORT}`);
})
         connectDB();
//  async () => {
//     try {

//     } catch (error) {
//         console.log('error :>> ', error);
//     }
// }

// Unhandled promise rejection
 process.on('unhandledRejection', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down server due to unhandled promise rejection');
    server.close(()=>process.exit(1));
})