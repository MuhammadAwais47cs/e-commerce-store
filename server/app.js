const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require( 'mongoose');
const errorMiddleware = require('./middleware/Error');
// const connection_url = 'mongodb+srv://admin:admin@cluster0.rzbahaf.mongodb.net/?retryWrites=true&w=majority'
app.use(express.json());
app.use(cors())
// middleware for error 
app.use(errorMiddleware) 

// Routes Imports 

const products = require('./routes/productsRoutes');
app.use('/api/v1',products)
module.exports = app