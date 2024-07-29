import express from 'express';
import StudentHistoryModel from "../models/studenthistory.js";
import StudentModel from '../models/student.js';

// const router = express.Router();

// API to fetch student history by roll number

export const fetstuhistory =async (req, res) => {
    try {
        const roll = req.params.stuId;
        // console.log(roll);
        const student = await StudentModel.findOne({ roll });

        if (!student) {
            return res.status(500).json({
                status: 'fail',
                message: 'Student not found'
            });
        }

        const studentHistory = await StudentHistoryModel.find({ student: student._id }).sort({ Dateandtime: 1 });

        return res.status(200).json({
            status: 'success',
            data: studentHistory
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            status: 'fail',
            message: 'Error while fetching student history'
        });
    }
}
export const fetchClassHistory = async (req, res) => {
    try {
        const currClass = req.params.currClass;
        
        // Find the history for all students in the specified class
        const classHistory = await StudentHistoryModel.find({ currClass }).sort({ Dateandtime: 1 });

        if (classHistory.length === 0) {
            return res.status(404).json({
                status: 'fail',
                message: 'No history found for this class'
            });
        }
        
        return res.status(200).json({
            status: 'success',
            data: classHistory
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            status: 'fail',
            message: 'Error while fetching class history'
        });
    }
}