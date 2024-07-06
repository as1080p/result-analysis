const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    student_id: { type: String, required: true },
    student_name: { type: String, required: true },
    
    subject1_name: { type: String, required: true },

    subject2_name: { type: String, required: true },
      
    subject3_name: { type: String, required: true },
      
    subject4_name: { type: String, required: true },
      
    subject5_name: { type: String, required: true },  
});

module.exports = mongoose.model('studentSubject', subjectSchema);
