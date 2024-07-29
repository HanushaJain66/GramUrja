import stuModel from '../models/student.js'
import StudentHistoryModel from "../models/studenthistory.js";

export const createStudent = async (req,res)=>{
    try{
        if(!req.body.name || !req.body.age || !req.body.dob || !req.body.currClass || !req.headers.mentor || !req.body.roll){
            
            return res.status(400).json({
                status:"fail",
                message:"All Fields are required"
            })
        }
        console.log(req.headers.Mentor);
        const newStudent = new stuModel({
            name:req.body.name,
            age:req.body.age,
            dob:req.body.age,
            currClass:req.body.currClass,
            mentor:req.headers.mentor,
            roll:req.body.roll
        })

        await newStudent.save();
        return res.status(200).json({
            status:"success",
            message:"Student Created Successfully"
        })
    } catch(error){
        console.log("Error while creating a Student",error.message);
        return res.status(500).json({
            status:"fail",
            message:"Error while creating a User"
        })
    }
}


export const attendence = async (req, res) => {
    try {
        const roll = req.params.roll;
        const findStudent = await StuModel.findOne({ roll });

        if (!findStudent) {
            return res.status(404).json({
                status: "fail",
                message: "No Student with this Roll Number Found"
            });
        }

        // Check if student already marked present in the last 24 hours
        const twentyFourHoursAgo = new Date();
        twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

        const attendanceRecord = await AttendanceModel.findOne({
            student: findStudent._id,
            createdAt: { $gte: twentyFourHoursAgo }
        });

        if (attendanceRecord) {
            return res.status(409).json({
                status: "fail",
                message: "Attendance already marked within the last 24 hours"
            });
        }

        // Toggle attendance status
        findStudent.totalClassAttended += 1;
        await findStudent.save();

        // Create attendance entry
        const newAttendance = new AttendanceModel({
            student: findStudent._id,
            createdAt: new Date(),
            status: 'Present'
        });
        await newAttendance.save();

        return res.status(200).json({
            status: 'success',
            message: "Attendance Marked Successfully"
        });
    } catch (error) {
        console.error("Error marking attendance:", error.message);
        res.status(500).json({
            status: "fail",
            message: "Error while marking attendance"
        });
    }
};


export const fetstuhistory = async (req, res) => {
    try {
        const roll = req.params.roll;
        const student = await StuModel.findOne({ roll });

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
};


export const fetchStudentsByClass = async (req, res) => {
    try {
        const currClass = req.params.currClass;
        const students = await stuModel.find({ currClass });

        if (students.length === 0) {
            return res.status(404).json({
                status: 'fail',
                message: 'No students found in this class'
            });
        }

        return res.status(200).json({
            status: 'success',
            data: students
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            status: 'fail',
            message: 'Error while fetching students'
        });
    }
};


export const getStudentDetails = async (req,res)=>{
    try{
        const stuId = req.params.stuId;
        console.log(stuId);
        const findStudent = await stuModel.findOne({roll:stuId});
        if(!findStudent){
            return res.status(409).json({
                status:"fail",
                message:"Student with this Id not Exist"
            })
        }
        return res.status(200).json({
            status:"Success",
            message:"Student details fetched Successfully",
            student:findStudent
        })
    } catch(error){
        console.log("Error while getting student Details",error.message);
        res.status(500).json({
            status:"fail",
            message:"Error while getting student details"
        })
    }
}

export const updateStudent = async (req,res)=>{
    try{
        const stuId = req.params.stuId;
        const findAndUpdateStudent = await stuModel.findOneAndUpdate({ roll: stuId }, { $set: req.body}, { new: true });

        const studentHistory = new StudentHistoryModel({
            student: findAndUpdateStudent._id, // Reference to the updated student document
            name: findAndUpdateStudent.name,
            roll: findAndUpdateStudent.roll,
            socioEmotion: findAndUpdateStudent.socioEmotion,
            numeric: findAndUpdateStudent.numeric,
            learning: findAndUpdateStudent.learning,
            levels: findAndUpdateStudent.levels,
            currClass: findAndUpdateStudent.currClass,
            Dateandtime: findAndUpdateStudent.Dateandtime // Optional: You can also set a new timestamp if needed
        });

        await studentHistory.save();

        if(req.body.currClass){
            findAndUpdateStudent.levels = 'a'
            findAndUpdateStudent.socioEmotion = 0;
            findAndUpdateStudent.numeric = 0;
            findAndUpdateStudent.learning = 0;
        }
        console.log(findAndUpdateStudent);
        if(findAndUpdateStudent.socioEmotion===100 && findAndUpdateStudent.learning===100 && findAndUpdateStudent.numeric===100){
            const levels = findAndUpdateStudent.levels;
            if(levels==='a'){
                findAndUpdateStudent.socioEmotion = 0;
                findAndUpdateStudent.numeric = 0;
                findAndUpdateStudent.learning = 0;
                findAndUpdateStudent.levels = 'b';
            } else if(levels==='b'){
                findAndUpdateStudent.socioEmotion = 0;
                findAndUpdateStudent.numeric = 0;
                findAndUpdateStudent.learning = 0;
                findAndUpdateStudent.levels = 'c';
            } else if(levels==='c'){
                findAndUpdateStudent.socioEmotion = 0;
                findAndUpdateStudent.numeric = 0;
                findAndUpdateStudent.learning = 0;
                findAndUpdateStudent.levels = 'd';
            }
        }
        await findAndUpdateStudent.save();
        return res.status(200).json({
            status:"success",
            message:"user Updated Successfully"
        })
    } catch(error){
        console.log(error.message);
        return res.status({
            status:"fail",
            message:"Error while Updating the User"
        })
    }
}

export const allStudentUnderMentor = async (req,res)=>{
    try{
        const getData = await stuModel.find({mentor:req.params.mentorId});
        console.log(getData);
        if(!getData){
            return res.status(400).json({
                status:"fail",
                message:"No Mentor Found"
            })
        }
        return res.status(200).json({
            status:"success",
            allStudent:getData
        })
    } catch(error){
        console.log("Error while getting student under the Mentor",error.message);
        res.status(500).json({
            status:"fail",
            message:"Error while getting student under mentor"
        })
    }
}
export const checkAttendence = ()=>{
    try{
        
    } catch(error){
        console.log("Error while Checking up the Attendence");
        return res.status(500).json({
            status:"success",
            message:"Error hiwle checking Attendence"
        })
    }
}