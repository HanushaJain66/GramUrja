import mongoose from "mongoose";

const studenthistorySchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hackathonstudents', // Reference to the Student model
        required: true
    },
    name: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true
    },
    socioEmotion: {
        type: Number,
        default: 0
    },
    numeric: {
        type: Number,
        default: 0
    },
    learning: {
        type: Number,
        default: 0
    },
    levels: {
        type: String,
        enum: ['a', 'b', 'c', 'd'],
        default: 'a'
    },
    currClass: {
        type: Number,
        default: '1st'
    },
    Dateandtime: {
        type: Date,
        default: Date.now
    }
});

const StudentHistoryModel = mongoose.model("studenthistory", studenthistorySchema);

export default StudentHistoryModel;
