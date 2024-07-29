import { useEffect, useState } from "react";
import './tableCard.css';
import axios from 'axios';

const TableCard = ({ data }) => {
    const [studentDetail, setStudentDetail] = useState(data);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const lastAttendanceDate = new Date(studentDetail.Dateandtime);
        const currentDate = new Date();
        const hoursDifference = (currentDate - lastAttendanceDate) / 36e5; // Convert milliseconds to hours

        if (hoursDifference < 24 && studentDetail.totalClassAttended > 0) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [studentDetail]);

    const uploadAttendance = async () => {
        try {
            const response = await axios.post(`http://localhost:8000/student/attendance/${studentDetail.roll}`);
            if (response.status === 200) {
                setChecked(true);
                setStudentDetail({
                    ...studentDetail,
                    totalClassAttended: studentDetail.totalClassAttended + 1,
                    Dateandtime: new Date().toISOString()
                });
            }
        } catch (error) {
            console.error('Error marking attendance:', error);
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-[100%] sm:w-[60%] flex p-[5px]">
                <div className="flex items-center justify-center text-center w-[60%]">
                    <p className="text-[25px] font-bold">{studentDetail.roll}</p>
                </div>
                <div className="items-center justify-center text-center w-[40%]">
                    <button 
                        disabled={checked} 
                        className={`text-[25px] font-bold ${checked ? "bg-blue-400 text-white" : "bg-red-400 text-black"}`} 
                        onClick={uploadAttendance}
                    >
                        {checked ? "Present" : "Absent"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TableCard;
