import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    firstName:{
    type:String
    },
    lastName:{
    type:String
    },
    email:{
    type:String
    },
    password:{
    type:String
    },
    mobile:{
    type:String
    }
})

const User=mongoose.model("User",UserModel)
export default User;