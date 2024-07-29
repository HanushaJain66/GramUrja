import express from 'express';
import {fetstuhistory,fetchClassHistory} from '../controller/studenthistorycontroller.js';

const router=express.Router();

router.route('/studenthistory/:stuId').get(fetstuhistory);
router.route('/classhistory/:currClass').get(fetchClassHistory);

export default router;