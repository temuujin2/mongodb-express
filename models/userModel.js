import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {type:String, required: [true, "Name is required"], trim: true},
        email: {type:String, required: [true, "Email is required"], trim: true, unique: true},
        password: {type:String, required: true}
    },
{timestamps:true});

export const userModel = mongoose.model("User", userSchema);