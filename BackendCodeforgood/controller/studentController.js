import stuModel from '../models/student.js'

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

export const attendence =  async (req,res) =>{
    try{
        const stuId = req.params.stuId;
        const findStudent = await stuModel.findById(stuId);
        if(findStudent){
            findStudent.totalClassAttended = findStudent.totalClassAttended+1;
        } else{
            return res.status(409).json({
                status:"fail",
                message:"No Student with this Id Found"
            })
        }
        await findStudent.save()
        return res.status(200).json({
            status:'Success',
            message:"Attendence Successfull"
        })
    } catch(error){
        console.log("Error while uploading the Attendence",error.message);
        res.status(500).json({
            status:"fail",
            message:"Error while mark the Attendence"
        })
    }
}

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