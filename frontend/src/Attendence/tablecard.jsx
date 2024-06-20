import { useEffect, useState } from "react";
import './tableCard.css';
import axios from 'axios';

const TableCard = ({ data }) => {
    const [studentDetail, setStudentDetail] = useState({});
    const [checked,setChecked] = useState(false);
    useEffect(() => {
        setStudentDetail(data);
    }, [])

    const uploadAttendence = async ()=>{
        try{
            const response = await axios.post(`http://localhost:8000/student/${studentDetail._id}`);
            if(response.status===200){
                setChecked(true);
            }
        } catch(error){
        }
    }
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="w-[100%] sm:w-[60%] flex p-[5px]">
                    <div className="flex items-center justify-center text-center w-[60%]">
                        <p className="text-[25px] font-bold">{studentDetail.roll}</p>
                    </div>
                    <div className="items-center justify-center text-center w-[40%]">
                        <p className="text-[25px] font-bold"><button disabled={checked} className={checked?" bg-blue-400 text-white hover:bg-blue-400 hover:text-white ":"bg-red-400 text-black"} onClick={uploadAttendence}>{checked?"Present":"Absent"}</button></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TableCard;