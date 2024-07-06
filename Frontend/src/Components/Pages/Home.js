import React from 'react';
import './Home.css';

function Home() {
  return (
   <div>
    <div className='home'>
      <h1 className='centered-bold'>Welcome To SAKEC</h1>
      <div className="centered-container">
        <p>
          Awarded ‘A’ (3.16 CGPA) Grade by National Assessment & Accreditation Council (NAAC)<br/>
          UG Programs in Computers & IT have been awarded accreditation by National Board of Accreditation (NBA) for 3 years from AY 2022-23<br/>
          UG Programs in Electronics and Telecom. have been awarded accreditation by NBA for 3 years from AY 2024-25<br/>
          Admissions 2024
        </p>
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Our institution is committed to providing quality education and fostering research and innovation. We strive to create a vibrant learning environment that nurtures talent and encourages academic excellence.
        </p>
      </div>
      </div>
      <div>
      <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>COMMUNICATION</h3>
          <ul>
            <li>SAKEC Email</li>
            <li>Admission</li>
            <li>Academic Calendar</li>
            <li>Scholarship</li>
            <li>Placements</li>
            <li>Policies</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>DEPARTMENTS</h3>
          <ul>
            <li>Electronics & Computer Sc.</li>
            <li>Computer Engg.</li>
            <li>Information Technology</li>
            <li>Electronics & Telecomm.</li>
            <li>AI & Data Science</li>
            <li>Cyber Security</li>
            <li>General Science & Humanities</li>
            <li>Electronics Engg. (VLSI Design & Technology)</li>
            <li>Electronics & Comm. (Adv. Comm. Technology)</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>COMMITTEES</h3>
          <ul>
            <li>Governing Body</li>
            <li>College Development Committee (CDC)</li>
            <li>Anti-Ragging Committee</li>
            <li>Grievance Redressal Committee (GRC)</li>
            <li>Student Grievance Redressal Committee (SGRC)</li>
            <li>Committee for SC ST</li>
            <li>Internal Complaints Committee (ICC)</li>
            <li>Minority Committee</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>PEOPLE</h3>
          <ul>
            <li>Student Life</li>
            <li>Leadership</li>
            <li>Trust Board</li>
            <li>Committees</li>
            <li>Placement</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>Accredited with 'A' Grade (2021) by NAAC for 5 years</p>
          <p>Ranked in band 251-300 (2020) by NIRF</p>
          <p>UG Programs for Computer & IT Accredited by NBA</p>
          <p>UG Programs for Computer & IT granted 'permanent affiliation' by University of Mumbai</p>
        </div>
        <div className="footer-bottom-right">
          <p>© 2023 Shah & Anchor Kutchhi Engineering College</p>
          <p></p>
        </div>
      </div>
    </footer>
      

     
      </div>
    </div>
   
  );
}

export default Home;
