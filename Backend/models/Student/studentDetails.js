const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    student_name: {
        type: String,
        required: true
    },
    student_id:{
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },    
    isAdmin: {
        type: Boolean,
        default: false
    },
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;