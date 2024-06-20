import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { stuId } = useParams();
  const [student, setStudent] = useState({});
  const [change, setChange] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/student/${stuId}`);
        setStudent(response.data.student);
        setLoading(false);
      } catch (error) {
        setError('Error fetching student details');
        setLoading(false);
      }
    };
    fetchStudentDetails();
  }, []);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    setChange({ ...change, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(student);
      await axios.put(`http://localhost:8000/student/${stuId}`, change);
      alert('Student updated successfully');
    } catch (error) {
      setError('Error updating student details');
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 relative top-[80px]">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Student Details</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={student.name || ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Age:</label>
              <input
                type="number"
                name="age"
                value={student.age || ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={student.dob ? new Date(student.dob).toISOString().split('T')[0] : ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Total Classes Attended:</label>
              <input
                type="number"
                name="totalClassAttended"
                value={student.totalClassAttended || ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Aadhar Number:</label>
              <input
                type="number"
                name="adhar"
                value={student.adhar || ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Current Class:</label>
              <input
                type="text"
                name="currClass"
                value={student.currClass || ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Levels:</label>
              <select
                name="levels"
                value={student.levels || ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Level</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
              </select>
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Socio-Emotional Score:</label>
              <input
                type="number"
                name="socioEmotion"
                value={student.socioEmotion || ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Learning Score:</label>
              <input
                type="number"
                name="learning"
                value={student.learning || ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Numeric Score:</label>
              <input
                type="number"
                name="numeric"
                value={student.numeric || ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Admission Number:</label>
              <input
                type="text"
                name="addmissionNumber"
                value={student.addmissionNumber || ''}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button type="submit" className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;