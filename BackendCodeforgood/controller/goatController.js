import express from 'express';
import GoatModel from "../models/goat.js";
import axios from 'axios';

export const goatRegister = async (req, res) => {
    try {
        const { beneficiary_name, phone, goat_id, goat_age, goat_height, goat_weight, vaccination, infants } = req.body;

        if (!beneficiary_name || !phone || !goat_id || !goat_age || !goat_height || !goat_weight) {
            return res.status(500).json({ success: false, message: "Enter all details" });
        }

        const newGoat = new GoatModel({
            beneficiary_name,
            phone,
            goat_id,
            goat_age,
            goat_height,
            goat_weight,
            vaccination,
            infants
        });

        await newGoat.save();

        // Prepare data for the Flask API
        const goatData = {
            age: goat_age,
            height: goat_height,
            weight: goat_weight,
            vaccinations: vaccination,
            gender: infants
        };

        // Call the Flask API to generate the goat report
        const response = await axios.post('http://localhost:5000/goat_report', goatData);
        
        const goatReport = response.data;
        console.log(goatReport);

        return res.status(200).json({ message: 'Goat added successfully', goatReport });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to add goat', error: error.message });
    }
}
