import mongoose from  "mongoose"

const patientSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true ,

  },

  diagnosed
},{timestamps : true});

export const Patient = mongoose.model("Patient",patinetSchema);