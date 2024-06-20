// import mongoose from "mongoose";


import mongoose from "mongoose";
const Goat = mongoose.Schema({
    beneficiary_name:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:Number,
        unique:true,
        required:true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number.'],
    },
    goat_id:{
        type: String,
        required: true
    },
    goat_age:{
        type:Number,
        default:0
    },
    goat_height:{
        type:Number,
        default:0
    },
    goat_weight:{
        type:Number,
        default:0
    },
    vaccination:{
       type:[String],
       default:[]
    },
    infants:{
        type: [String],
        default:[]
    }
})
const GoatModel = mongoose.model("goat",Goat);
export default GoatModel;