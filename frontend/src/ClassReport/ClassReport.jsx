import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { useParams } from 'react-router-dom';
// import './GraphReport.css';

const ClassReport = () => {
    const { currClass } = useParams();
    console.log(currClass);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/classhistory/${currClass}`);
                if (response.data.status === 'success') {
                    setData(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching class history:', error);
            }
        };

        fetchData();
    }, []);
    console.log(data);
    return (
        <div className="graph-container">
            <div className="graph">
                <h3>Socio-Emotional Changes</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Dateandtime" tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
                        <YAxis />
                        <Tooltip labelFormatter={(label) => new Date(label).toLocaleDateString()} />
                        <Legend />
                        <Line type="monotone" dataKey="socioEmotion" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="graph">
                <h3>Numeric Changes</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Dateandtime" tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
                        <YAxis />
                        <Tooltip labelFormatter={(label) => new Date(label).toLocaleDateString()} />
                        <Legend />
                        <Line type="monotone" dataKey="numeric" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="graph">
                <h3>Learning Changes</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Dateandtime" tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
                        <YAxis />
                        <Tooltip labelFormatter={(label) => new Date(label).toLocaleDateString()} />
                        <Legend />
                        <Line type="monotone" dataKey="learning" stroke="#ffc658" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ClassReport;
