import { useEffect, useState } from "react";
import axios from "axios";
import TableCard from "./tablecard";
const Track = () => {
    const [studentDetails, setStudentDetail] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get('http://localhost:8000/mentor/666ddef14cd58fa297751f8c');
            if (response.status === 200) {
                setStudentDetail(response.data.allStudent);
            }
        }
        fetch();
    }, [])
    return (<>
        <div className="mt-[95px]">
            <p className="text-center text-[40px] font-bold">Mark Attendence</p>
        </div>
        <div className="flex items-center justify-center">
            <div className="w-[100%] sm:w-[60%] flex p-[3px]">
                <div className=" flex items-center justify-center text-center w-[60%]">
                    <p className="text-[25px] font-bold">Roll No</p>
                </div>
                <div className="items-center justify-center text-center w-[40%]">
                    <p className="text-[25px] font-bold">Mark</p>
                </div>
            </div>
        </div>
        {
            studentDetails.map((data) => (
                <TableCard data={data}/>
            ))
        }
    </>)
}
export default Track;