import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    studentId: String,
    course: { type: String, enum: ['BSCS', 'BSIT', 'BSSE'] },
    phone: String,
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    city: String
}, {timestamps: true});

export default mongoose.model("students", studentSchema)
