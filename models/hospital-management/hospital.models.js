import mongoose from  "mongoose"

const hospitalSchema = new mongoose.Schema({},{timestamps : true});

export const HospitalRecord = mongoose.model("HospitalRecord",hospitalSchema);