import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    status :{
        type : String,
        required : true,
        default : 'Student'
    },
    create_at : {
        type : Date,
        required : true,
        default : Date.now
    }

});

const Users = mongoose.model('Users', userSchema);
export default Users;
