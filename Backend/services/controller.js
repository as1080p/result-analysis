const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student/studentDetails');
const Teacher = require('../models/Teacher/teacherDetails');
const Subject = require('../models/Student/studentSubjects');
const MarksEntry = require('../models/Teacher/marksEntry');

// Student registration (manual entry via API for initial data population)
const addStudent = async (req, res) => {
    try {
        const { student_name, email, phone_number, branch, year, student_id, password } = req.body;

        if (!student_name || !email || !phone_number || !branch || !year || !student_id || !password) {
            return res.status(400).send("All fields are required.");
        }

        const hash_password = await bcrypt.hash(password, 10);

        const newStudent = new Student({ 
            student_name, 
            email, 
            phone_number, 
            branch, 
            year, 
            student_id, 
            password: hash_password 
        });

        await newStudent.save();
        res.status(201).json({ message: "Student added successfully" });
    } catch (error) {
        console.error("Error adding student:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const addTeacher = async (req, res) => {
    try {
        const { name, email, phone_number, subject, employee_id, password, branch, year } = req.body;

        if (!name || !email || !phone_number || !subject || !employee_id || !password || !branch || !year) {
            return res.status(400).send("All fields are required.");
        }

        const hash_password = await bcrypt.hash(password, 10);

        const newTeacher = new Teacher({
            name,
            email,
            phone_number,
            subject,
            employee_id,
            password: hash_password,
            branch,
            year
        });

        await newTeacher.save();
        res.status(201).json({ message: "Teacher added successfully" });
    } catch (error) {
        console.error("Error adding teacher:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// Add subject and teacher details
const addSubjectTeacher = async (req, res) => {
    try {
        const { student_id, student_name, subject1_name, subject2_name, subject3_name, subject4_name, subject5_name } = req.body;

        // Validate input
        if (!student_id || !student_name || !subject1_name || !subject2_name || !subject3_name || !subject4_name || !subject5_name) {
            return res.status(400).json({ message: "Student ID, Student Name, and all Subjects are required." });
        }

        // Create new Subject document
        const newSubjects = new Subject({
            student_id,
            student_name,
            subject1_name,
            subject2_name,
            subject3_name,
            subject4_name,
            subject5_name
        });

        // Save to database
        await newSubjects.save();
        res.status(201).json({ message: "Subjects added successfully" });
    } catch (error) {
        console.error("Error adding subjects:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Add marks entry
const addMarks = async (req, res) => {
    try {
        const { student_id, student_name, student_email, subject1_marks, subject2_marks, subject3_marks, subject4_marks, subject5_marks } = req.body;

        // Fetch student details from the database
        const student = await Student.findOne({ student_id });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        
        // Create new MarksEntry document
        const newMarksEntry = new MarksEntry({
            student_id,
            student_name,
            student_email,
            subject1_marks,
            subject2_marks,
            subject3_marks,
            subject4_marks,
            subject5_marks
        });

        // Save to database
        await newMarksEntry.save();
        res.status(201).json({ message: "Marks added successfully" });
    } catch (error) {
        console.error("Error adding marks:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// Student login
const studentLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { userid: student._id, email: student.email, isAdmin: student.isAdmin },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "3d" }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error("Error during student login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Teacher login
const teacherLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)

        const teacher = await Teacher.findOne({ email });
        if (!teacher) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, teacher.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { userid: teacher._id, email: teacher.email, isAdmin: teacher.isAdmin },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "3d" }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error("Error during teacher login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getMarks = async (req, res) => {
    try {
        const studentEmail = req.query.student_email;
        const marks = await MarksEntry.findOne({ student_email: studentEmail });
        if (!marks) {
            return res.status(404).json({ message: 'Marks not found' });
        }
        res.json(marks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {
    addStudent,
    addTeacher,
    addSubjectTeacher,
    addMarks,
    studentLogin,
    teacherLogin,
    getMarks
};
