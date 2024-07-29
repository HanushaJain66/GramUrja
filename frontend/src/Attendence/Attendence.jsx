import { useEffect, useState } from "react";
import axios from "axios";
import TableCard from "./tablecard";
import './tableCard.css'

const Track = () => {
    const [studentDetails, setStudentDetail] = useState([]);
    const [selectedClass, setSelectedClass] = useState(0); // Initialize with 0 or null
// console.log(selectedClass);
    useEffect(() => {
        if (selectedClass) {
            const fetch = async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/class/${selectedClass}`);
                    // console.log(response);
                    if (response.status === 200) {
                        setStudentDetail(response.data.data);
                    }
                } catch (error) {
                    console.error('Error fetching student data:', error);
                }
            };
            fetch();
        }
    }, [selectedClass]);

    const handleClassChange = (e) => {
        setSelectedClass(parseInt(e.target.value)); // Convert value to integer
    };

    return (
        <div className="track-container mt-5 hanu">
            <div className="class-select">
                <label htmlFor="class" className="font-bold">Select Class: </label>
                <select id="class" onChange={handleClassChange}>
                    <option value={0}>Select Class</option>
                    <option value={1}>1st</option>
                    <option value={2}>2nd</option>
                    <option value={3}>3rd</option>
                    <option value={4}>4th</option>
                    <option value={5}>5th</option>
                </select>
            </div>
            <div className="mt-5">
                <p className="text-center font-bold">Mark Attendance</p>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full sm:w-3/4 flex p-3">
                    <div className="flex items-center justify-center w-3/5">
                        <p className="font-bold">Roll No</p>
                    </div>
                    <div className="items-center justify-center w-2/5">
                        <p className="font-bold">Mark</p>
                    </div>
                </div>
            </div>
            {studentDetails.map((data) => (
                <TableCard key={data.roll} data={data} />
            ))}
        </div>
    );
};

export default Track;
