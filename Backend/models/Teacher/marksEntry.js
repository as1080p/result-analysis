const mongoose = require('mongoose');

const marksEntrySchema = new mongoose.Schema({
    student_id: {
        type: String,
        required: true
    },
    student_name: {
        type: String,
        required: true
    },
    student_email: {
        type: String,
        required: true
    },
    subject1_marks: { 
        type: Number, 
        default: null 
    },
    subject2_marks: { 
        type: Number, 
        default: null 
    },
    subject3_marks: { 
        type: Number, 
        default: null 
    },
    subject4_marks: { 
        type: Number, 
        default: null 
    },
    subject5_marks: { 
        type: Number, 
        default: null 
    },
});

module.exports = mongoose.model('MarksEntry', marksEntrySchema);
