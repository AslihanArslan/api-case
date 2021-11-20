const express = require('express');
const dotenv = require('dotenv');
const app = express();
const route = require('./route/records');

dotenv.config({ path: './config/.env' }); //env file

const mongoose = require('mongoose');

const connectToDatabase = async () => {
    const connectDb = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`Database connected: ${connectDb.connection.host} `)
}

connectToDatabase(); //connect to db

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
app.use(express.json()); 
app.use(route);

module.exports = app;
