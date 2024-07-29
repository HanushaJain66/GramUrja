import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoatInformationForm = () => {
    const navigate = useNavigate();
    const [showInfantOptions, setShowInfantOptions] = useState(false);
    const [showVaccineCheckboxes, setShowVaccineCheckboxes] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [report, setReport] = useState(null);

    const toggleInfantOptions = (value) => {
        setShowInfantOptions(value === 'yes');
    };

    const toggleVaccinationDropdown = (value) => {
        setShowVaccineCheckboxes(value === 'yes');
    };

const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await axios.post('http://localhost:8000/goatregister', data);
            setSuccessMessage(response.data.message);
            // console.log(response.data.goatReport);
            setReport(response.data.goatReport);
            // console.log(response.data.goatReport);
            console.log(report);
            navigate('/goatdo&dont', { state: { report: response.data.goatReport } });
        } catch (error) {
            setErrorMessage(error.response.data.message);
            console.log(error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4 mt-[80px]">
            <div className="container max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-center text-3xl text-red-600 mb-6">Goat Information Form</h2>
                {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                <form id="goatForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="goatID" className="block font-bold mb-1">Goat ID:</label>
                        <input type="text" id="goatID" name="goat_id" className="w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="beneficiaryName" className="block font-bold mb-1">Beneficiary Name:</label>
                        <input type="text" id="beneficiaryName" name="beneficiary_name" className="w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber" className="block font-bold mb-1">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phone" className="w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age" className="block font-bold mb-1">Age:</label>
                        <input type="number" id="age" name="goat_age" className="w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="height" className="block font-bold mb-1">Height:</label>
                        <input type="number" id="height" name="goat_height" className="w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight" className="block font-bold mb-1">Weight:</label>
                        <input type="number" id="weight" name="goat_weight" className="w-full p-2 border border-gray-300 rounded-md" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="infants" className="block font-bold mb-1">Infants:</label>
                        <select id="infants" name="infants" onChange={(e) => toggleInfantOptions(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>
                    {showInfantOptions && (
                        <div className="form-group">
                            <div className="checkbox-group">
                                <input type="radio" id="maleInfant" name="infantGender" value="male" className="mr-2" />
                                <label htmlFor="maleInfant">Male:</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="radio" id="femaleInfant" name="infantGender" value="female" className="mr-2" />
                                <label htmlFor="femaleInfant">Female:</label>
                            </div>
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="vaccination" className="block font-bold mb-1">Vaccination:</label>
                        <select id="vaccination" name="vaccination" onChange={(e) => toggleVaccinationDropdown(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>
                    {showVaccineCheckboxes && (
                        <div className="form-group">
                            <label className="block font-bold mb-1">Select Vaccinations:</label>
                            <div className="checkboxes">
                                <div className="checkbox-group">
                                    <input type="checkbox" id="vaccine1" name="vaccines[]" value="Pneumonia" className="mr-2" />
                                    <label htmlFor="vaccine1">Haemorrhagic Septicemia (H.S.)</label>
                                </div>
                                <div className="checkbox-group">
                                    <input type="checkbox" id="vaccine2" name="vaccines[]" value="Foot and Mouth Disease" className="mr-2" />
                                    <label htmlFor="vaccine2">Foot and Mouth Disease (FMD)</label>
                                </div>
                                <div className="checkbox-group">
                                    <input type="checkbox" id="vaccine3" name="vaccines[]" value="Anthrax" className="mr-2" />
                                    <label htmlFor="vaccine3">Anthrax</label>
                                </div>
                            </div>
                        </div>
                    )}
                    <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-md mt-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default GoatInformationForm;
