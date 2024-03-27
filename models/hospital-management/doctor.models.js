import mongoose from  "mongoose"

const doctorSchema = new mongoose.Schema({},{timestamps : true});

export const DoctorRecord = mongoose.model("DoctorRecord",doctorSchema);