import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useParams } from 'react-router-dom';

Chart.register(ArcElement);

const Viewdetails = () => {
  const { stuId } = useParams();
  const [student, setStudent] = useState({});
  const [error, setError] = useState('');
  const socioEmotionChartRef = useRef(null);
  const learningChartRef = useRef(null);
  const numericChartRef = useRef(null);
  const [loading, setLoading] = useState(true);

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
  }, [stuId]);

  const generatePDF = () => {
    const doc = new jsPDF();

    // Adjustments for fitting all content on a single page
    const chartWidth = 50;
    const chartHeight = 50;
    const chartMargin = 5;

    doc.text('Student Report', 20, 10);
    doc.autoTable({
      head: [['Name', 'Class', 'Admission Number', 'Level']],
      body: [[student.name, student.currClass, student.roll, student.levels]],
      startY: 20,
    });

    const addChartToPDF = (doc, chartRef, title, percentage, x, y) => {
      const chart = chartRef.current;
      if (chart) {
        const chartCanvas = chart.canvas;
        const chartDataUrl = chartCanvas.toDataURL('image/png');
        doc.text(`${title} ${percentage}%`, x, y);
        doc.addImage(chartDataUrl, 'PNG', x, y + 9, chartWidth, chartHeight);
      }
    };

    const startX = 15;
    let startY = doc.autoTable.previous.finalY + 10;

    addChartToPDF(doc, socioEmotionChartRef, 'Socio Emotional', student.socioEmotion, startX, startY);
    addChartToPDF(doc, learningChartRef, 'Literacy', student.learning, startX + chartWidth + chartMargin+8, startY);
    addChartToPDF(doc, numericChartRef, 'Numeracy', student.numeric, startX + 2 * (chartWidth + chartMargin+8), startY);

    doc.save('student_report.pdf');
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const socioEmotionChart = {
    data: {
      labels: ['Socio Emotional', 'Remaining'],
      datasets: [{
        data: [student.socioEmotion, 100 - student.socioEmotion],
        backgroundColor: ['#FF6384', '#DDDDDD']
      }]
    }
  };

  const learningChart = {
    data: {
      labels: ['Literacy', 'Remaining'],
      datasets: [{
        data: [student.learning,100 - student.learning],
        backgroundColor: ['#36A2EB', '#DDDDDD']
      }]
    }
  };

  const numericChart = {
    data: {
      labels: ['Numeracy', 'Remaining'],
      datasets: [{
        data: [student.numeric,100 - student.numeric],
        backgroundColor: ['#FFCE56', '#DDDDDD']
      }]
    }
  };

  const attendancePercentage = (student.totalClassAttended / 31) * 100;

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center mt-[65px]">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Student Report</h1>
        <div className="mb-6 text-center">
          <p className="text-lg"><strong>Name:</strong> {student.name}</p>
          <p className="text-lg"><strong>Class:</strong> {student.currClass}</p>
          <p className="text-lg"><strong>Admission Number:</strong> {student.roll}</p>
          <p className="text-lg"><strong>Level:</strong> {student.levels}</p>
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Socio Emotional ({student.socioEmotion}%)</h2>
            <Pie ref={socioEmotionChartRef} data={socioEmotionChart.data} />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Literacy ({student.learning}%)</h2>
            <Pie ref={learningChartRef} data={learningChart.data} />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Numeracy ({student.numeric}%)</h2>
            <Pie ref={numericChartRef} data={numericChart.data} />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-center">Attendance</h2>
          <div className="w-full bg-gray-200 rounded-full h-8">
            <div className="bg-green-500 h-8 rounded-full flex items-center justify-center" style={{ width: `${attendancePercentage}%` }}>
              <span className="text-white font-bold">{attendancePercentage.toFixed(2)}%</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={generatePDF}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Viewdetails;
