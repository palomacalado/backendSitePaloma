import mongoose from "mongoose";
const loginSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    password:{
        type:String,
        required:true,
        
    }
},{
    timestamps:true
});

export default mongoose.model('Login', loginSchema)