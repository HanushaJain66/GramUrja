import express from 'express';
import MiddlewareAuth from '../controller/middleware.js';
import Mentor from "../models/mentor.js";
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// Register Function
export const Register = async (req, res) => {
    const { fullname, email, password, phone, PAN, state, city, street, zipcode } = req.body;
    console.log(req.body);
    try {
        let userr = await Mentor.findOne({ email });
        if (userr) {
            return res.status(500).json({ success: false, message: "Email id Already in use" });
        }
        const hashedPsw = await bcrypt.hash(password, 12);
        const user = await Mentor.create({
            fullname,
            email,
            password: hashedPsw,
            phone,
            PAN,
            state,
            city,
            street,
            zipcode
        });

        await user.save();
        return res.status(200).json({ success: "success", message: "Mentor Registered Successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: "fail", message: "Error registering mentor", error: error.message });
    }
}

// Login Function
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Ensure email and password are provided
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Please provide both email and password" });
        }
        const user = await Mentor.findOne({ email }).select("+password"); 
        const token = await jwt.sign(user.toJSON(), "hanusha", { expiresIn: '25d' });
        if (!user) {
            return res.status(500).json({ success: false, message: "Email id doesn't exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).json({ success: "success", message: "Password doesn't match" });
        }
        // If login is successful, send a success response or a JWT token if using authentication
        return res.status(200).json({ success: "success", message: "Login successful",user:user,token:token});
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ success: "fail", message: "Internal server error" });
    }
}
