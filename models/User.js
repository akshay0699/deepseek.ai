import mongoose from "mongoose";


// making schema for database here
const UserSchema = new mongoose.Schema(
    {
        _id: {type:String, required:true},
        name: {type:String, required:true},
        email: {type:String, required:true},
        image: {type:String, required:false},
    },
    {
        timestamps:true
    }
);


const User =  mongoose.models.User || mongoose.model('User', UserSchema);

export default User;