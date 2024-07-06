const mongoose = require("mongoose");

const URI =process.env.MONGODB_URI;

const connectdb =async() => {
    try{
        const conn = await mongoose.connect(URI);
        console.log("connected to database");
        console.log(conn.connection.name);
        }catch(err){
            console.log(err);
        }
};
module.exports = connectdb;
