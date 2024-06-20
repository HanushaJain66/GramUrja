import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
    const navigate = useNavigate();
  const [mentorData, setMentorData] = useState({
            fullname: '',
            email: '',
            password: '',
            PAN: '',
            address: {
                state: '',
                city: '',
                street: '',
                zipcode: '',
            },
            phone:''
  });

  const handleChange = (e) => {
    setMentorData({...mentorData,[e.target.name]: e.target.value});
    console.log({ ...mentorData, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setMentorData(prevState => ({ ...prevState, address: { ...prevState.address, [e.target.name]: e.target.value, } }));
    console.log(mentorData);
  };            
  const createStudent = async ()=>{
    try{
        const response = await axios.post('http://localhost:8000/register',mentorData);
        console.log(response);
        if(response.status===200){
            navigate('/login');
        }
    } catch(error){
        console.log(error.message);
    }
  }
  return (
    <>
        <div className="flex mt-[50px] items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white w-[100%] p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-[30px] mb-[40px]">Mentor Registration</h2>
                <div className="flex justify-center">
                    <div className="w-[90%] sm:w-[50%]">
                        <div className="mb-4 flex  gap-6">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 text-[20px] relative top-2">FullName*</label>
                            <input
                                type="text"
                                id="fullname"
                                name= "fullname"
                                value={mentorData.fullName}
                                onChange={(e)=>handleChange(e)}
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4 flex  gap-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-[20px] relative top-2">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={mentorData.email}
                                onChange={handleChange}
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4 flex  gap-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-[20px] relative top-2">Password*</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={mentorData.password}
                                onChange={handleChange}
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4 flex  gap-6">
                            <label htmlFor="pan" className="block text-sm font-medium text-gray-700 text-[20px] relative top-2">PAN*</label>
                            <input
                                type="text"
                                id="PAN"
                                name="PAN"
                                value={mentorData.PAN}
                                onChange={handleChange}
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4 flex  gap-6">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 text-[20px] relative top-2">State*</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={mentorData.address.state}
                                onChange={handleAddressChange}
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4 flex  gap-6">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 text-[20px] relative top-2">City*</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={mentorData.address.city}
                                onChange={handleAddressChange}
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4 flex  gap-6">
                            <label htmlFor="street" className="block text-sm font-medium text-gray-700 text-[20px] relative top-2">Street*</label>
                            <input
                                type="text"
                                id="street"
                                name="street"
                                value={mentorData.address.street}
                                onChange={handleAddressChange}
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4 flex  gap-6">
                            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 text-[20px] relative top-2">Zipcode*</label>
                            <input
                                type="number"
                                id="zipcode"
                                name="zipcode"
                                value={mentorData.address.zipcode}
                                onChange={handleAddressChange}
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4 flex  gap-6">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-[20px] relative top-2">Phone*</label>
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={mentorData.address.phone}
                                onChange={handleChange}
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={createStudent}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Register
                        </button>
                    </div>
                </div>
                </div>
            </div>
    </>)
}
export default Register;