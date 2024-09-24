// import mongoose from "mongoose"
// import{DB_NAME} from "./constants"
// import express from "express"
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

connectDB ()
.then()
.catch((err)=>{
    application.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
        

    })
    console.log("MONGO db connection failed!!",err);
    

})






















// (async()=>{
//     try{
//           await mongoose.connect
//           (`${process.env.MONGODB_URI}/${DB_NAME}`
//           )
//           app.on("error",()=>{console.log("ERR:",error);
//           throw error
//     })

//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
        
//     })


//     }
//     catch(error){
//         console.error("Error:",error)
//     throw err}
// })()