const express = require('express');
const router = express.Router();
const {
    addStudent,
    addTeacher,
    addSubjectTeacher,
    addMarks,
    studentLogin,
    teacherLogin,
    getMarks
} = require('../services/controller');

// Routes for adding data
router.post('/addStudent', addStudent);
router.post('/addTeacher', addTeacher);
router.post('/addSubjectTeacher', addSubjectTeacher);
router.post('/addMarks', addMarks);

// Routes for login
router.post('/studentLogin', studentLogin);
router.post('/teacherLogin', teacherLogin);

router.get('/getMarks', getMarks);

module.exports = router;
