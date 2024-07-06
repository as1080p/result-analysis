import React, { useState } from 'react';
import axios from 'axios';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '../Pages/myDocument';
import './STprofile.css';

const StudentProfile = () => {
    const [marks, setMarks] = useState(null);
    const [studentEmail, setStudentEmail] = useState('');
    const [averageScore, setAverageScore] = useState(null);
    const [pointer, setPointer] = useState(null);
    const [overallGrade, setOverallGrade] = useState('');

    const fetchMarks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/getMarks', {
                params: {
                    student_email: studentEmail // Pass email as a query parameter
                }
            });
    
            setMarks(response.data);
            calculateAverageScore(response.data); // Calculate average score when marks are fetched
        } catch (error) {
            console.error('Error fetching marks:', error);
        }
    };

    const calculateAverageScore = (marksData) => {
        const {
            subject1_marks,
            subject2_marks,
            subject3_marks,
            subject4_marks,
            subject5_marks
        } = marksData;

        // Calculate average score
        const totalMarks = subject1_marks + subject2_marks + subject3_marks + subject4_marks + subject5_marks;
        const average = totalMarks / 5; // Assuming there are 5 subjects

        setAverageScore(average);

        // Calculate pointer out of 10 (assuming marks are out of 80 for each subject)
        const pointer = (average / 80) * 10;
        setPointer(pointer.toFixed(2)); // Round to 2 decimal places

        // Determine pass/fail for each subject
        const passFail = {
            subject1: subject1_marks >= 32 ? 'PASS' : 'FAIL',
            subject2: subject2_marks >= 32 ? 'PASS' : 'FAIL',
            subject3: subject3_marks >= 32 ? 'PASS' : 'FAIL',
            subject4: subject4_marks >= 32 ? 'PASS' : 'FAIL',
            subject5: subject5_marks >= 32 ? 'PASS' : 'FAIL'
        };

        // Check if student has failed in any subject for overall grade determination
        if (
            subject1_marks < 32 ||
            subject2_marks < 32 ||
            subject3_marks < 32 ||
            subject4_marks < 32 ||
            subject5_marks < 32
        ) {
            setOverallGrade('UNSUCCESSFUL');
        } else {
            setOverallGrade('SUCCESSFUL');
        }

        // Combine marks with pass/fail status
        const marksWithStatus = {
            ...marksData,
            passFail
        };

        setMarks(marksWithStatus);
    };      

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMarks();
    };

    return (
        <div>
          <h1>Student Profile</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Enter your email ID:
              <input
                type="text"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                required
              />
            </label>
            <button type="submit">Fetch Marks</button>
          </form>
          {marks && (
            <div>
              <h2 className="center-title">Marks</h2>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Marks</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Computer Organization and Architecture</td>
                      <td>{marks.subject1_marks}</td>
                      <td>{marks.passFail.subject1}</td>
                    </tr>
                    <tr>
                      <td>Software Engineering</td>
                      <td>{marks.subject2_marks}</td>
                      <td>{marks.passFail.subject2}</td>
                    </tr>
                    <tr>
                      <td>Communication Engineering</td>
                      <td>{marks.subject3_marks}</td>
                      <td>{marks.passFail.subject3}</td>
                    </tr>
                    <tr>
                      <td>Web Technologies</td>
                      <td>{marks.subject4_marks}</td>
                      <td>{marks.passFail.subject4}</td>
                    </tr>
                    <tr>
                      <td>Software Testing and Quality Assurance</td>
                      <td>{marks.subject5_marks}</td>
                      <td>{marks.passFail.subject5}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 className="center-title">Analysis</h2>
              <div className="results-table-container">
                <table>
                  <tbody>
                    <tr>
                      <td>Average Score:</td>
                      <td>{averageScore}</td>
                    </tr>
                    <tr>
                      <td>Pointer out of 10:</td>
                      <td>{pointer}</td>
                    </tr>
                    <tr>
                      <td>Overall Grade:</td>
                      <td>{overallGrade}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="download-button-container">
                <PDFDownloadLink
                  document={<MyDocument student_email={studentEmail} marks={marks} />}
                  fileName={`${studentEmail}_Marks_Report.pdf`}
                  className="download-button"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download PDF'
                  }
                </PDFDownloadLink>
              </div>
            </div>
          )}
        </div>
      );
    };
    
    
export default StudentProfile;
  