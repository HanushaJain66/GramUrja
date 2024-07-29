import { useNavigate } from "react-router-dom";

const  ButtonGroup = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6 my-10">
            <button onClick={()=>navigate('/attendence')} className="bg-[#660000] text-white w-[90%] sm:w-[60%] h-[100px] rounded-lg">
                Attendance Tracker
            </button>
            <button onClick={()=>navigate('/update')} className="bg-[#660000] text-white h-[100px]  w-[90%] sm:w-[60%] rounded-lg">
                Update the details of student
            </button>
            <button onClick={()=>navigate('/views')} className="bg-[#660000] text-white h-[100px]  w-[90%] sm:w-[60%] rounded-lg">
               Download the details
            </button>
            <button onClick={()=>navigate('/createstudent')} className="bg-[#660000] text-white h-[100px]  w-[90%] sm:w-[60%] rounded-lg">
                 Add details of new Student
            </button>
            <button onClick={()=>navigate('/GraphBase')} className="bg-[#660000] text-white h-[100px]  w-[90%] sm:w-[60%] rounded-lg">
                 View Graphical Analysis
            </button>
            <button onClick={()=>navigate('/ClassBase')} className="bg-[#660000] text-white h-[100px]  w-[90%] sm:w-[60%] rounded-lg">
                 View Class Performance
            </button>
        </div>
    );
}

export default ButtonGroup;
