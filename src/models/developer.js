import mongoose from "mongoose";
const developerSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    image:{
        type:String,
        required:true,
    },
    preview:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

export default mongoose.model('Developer', developerSchema)