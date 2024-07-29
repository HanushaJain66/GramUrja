import React from 'react';
import { useLocation } from 'react-router-dom';

const GoatDoAndDont = () => {
    const location = useLocation();
    const report = location.state?.report;
    console.log(report);
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4 mt-[80px]">
            <div className="container max-w-2xl bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-center text-3xl text-red-600 mb-6">Goat Report and Tips</h2>
                {report && (
                    <div className="bg-gray-200 p-4 rounded-md mt-4">
                        <h3 className="text-xl mb-2">Goat Report</h3>
                        <p><strong>Health Condition:</strong> {report.health_condition}</p>
                        <p><strong>Market Price:</strong> ${report.market_price}</p>
                        <p><strong>Milk Price per Liter:</strong> ${report.milk_price_per_liter}</p>
                        <p><strong>Meat Price per KG:</strong> ${report.meat_price_per_kg}</p>
                        {/* <p><strong>Required Vaccinations:</strong> {report.required_vaccinations.join(', ')}</p>
                        <p><strong>Tips:</strong> {report.tips.join(' ')}</p>
                        <p><strong>Daily Care:</strong> {report.daily_care}</p> */}
                    </div>
                )}
                <div className="mt-4">
                    <h3 className="text-xl mb-2">Do's and Dont's</h3>
                    <ul className="list-disc list-inside">
                        <li>Do provide clean water daily.</li>
                        <li>Don't overfeed your goat.</li>
                        {/* Add more do's and dont's as needed */}
                    </ul>
                </div>\

            </div>
        </div>
    );
};

export default GoatDoAndDont;
