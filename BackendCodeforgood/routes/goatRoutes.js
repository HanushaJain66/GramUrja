import express from 'express';
const router = express.Router();
import {goatRegister} from "../controller/goatController.js";


router.post("/goatregister",goatRegister);


export default router;