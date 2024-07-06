const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
teacher_name:{
    type: String,
    required: true
 },
employee_id:{
    type: String,
    required: true
 },
subject:{
    type: String,
    required: true
    },
phone_number: {
        type: String,
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
email:{
    type:String,
    required: true
},
password:{
    type: String,
    required: true
},
isAdmin:{
     type:Boolean,
     required:false
 }
})

const Teacher =new mongoose.model('Teacher',TeacherSchema);
module.exports = Teacher;