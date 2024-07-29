import express from 'express';
import { createStudent ,getStudentDetails,attendence,updateStudent,allStudentUnderMentor,fetchStudentsByClass,fetstuhistory} from '../controller/studentController.js';
const studentRouter = express.Router();

studentRouter.route('/createstudent')
.post(createStudent);

studentRouter.route('/student/:stuId')
.get(getStudentDetails)
.post(updateStudent);

studentRouter.post('/student/attendance/:roll', attendence);

// studentRouter.get('/studenthistory/:roll', fetstuhistory);


studentRouter.route('/mentor/:mentorId')
.get(allStudentUnderMentor);

// studentRouter.get('/class/:currClass', fetchStudentsByClass);


export default studentRouter;