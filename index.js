const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
.then(() =>{
    console.log("database connected succ");
})
.catch((err)=>{
    console.log(err);
})
const itemRoutes = require('./route/items')

app.use(express.json());
app.use(cors())
app.use('/api',itemRoutes);


app.listen(4000, ()=>{
    console.log("server connect");
})


