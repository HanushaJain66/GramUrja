import mongoose from "mongoose";
const Student = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        default:0,
    },
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'mentors'
    },
    dob:{
        type:Date,
        required:true,
    },
    totalClassAttended:{
        type:Number,
        default:0
    },
    adhar:{
        type:Number,
        default:0,
    },
    currClass:{
        type:Number,
        default:'1st'
    },
    levels:{
        type:String,
        enum:['a','b','c','d'],
        default:'a'
    },
    socioEmotion:{
        type:Number,
        default:0,
    },
    learning:{
        type:Number,
        default:0,
    },
    numeric:{
        type:Number,
        default:0,
    },  
    roll:{
        type:Number,
        required:true,
        unique:true,
        length:4
    },
    Dateandtime:{
        type: Date,
        default: Date.now
    }
})
const StuModel = mongoose.model("hackathonstudents",Student);
export default StuModel;