import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const uri = process.env.URI
export const connectDatabase =async ()=>{
    const connect=await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then(() => {
      console.log("Connected to MongoDB successfully!");
     
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
}

