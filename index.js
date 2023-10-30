const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()
const authRouter = require("./routes/auth.routes");
const clientsRouter = require("./routes/clients.routes");

const morgan=require('morgan')

const app=express()

const PORT=process.env.SERVER_PORT
const DB_URL=process.env.DB_URL

app.use(express.json())
app.use(morgan('tiny'))
app.use("/api/auth",cors(), authRouter);
app.use("/api",cors(), clientsRouter);


function start(){
    try{
   mongoose.connect(DB_URL)
   app.listen(PORT,()=>{
       console.log(`Server listen on port:${PORT}`)


   })

   } catch(err){
       console.log(err.message)
   }
}

start()