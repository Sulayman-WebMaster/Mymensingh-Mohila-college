import mongoose from "mongoose";

const studentSchema = [
   {
    rollNo:{
        type:String,
        unique:true,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    studentMobile:{
        type:Number,
        required:true
    },
    fathersName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    ParentsNumber:{
        type:Number,
        required:true
    },
    subjects: [
        {
          name: { type: String, required: true },
          code: { type: String },
          typeOfSubject: {type:String}
        }
      ]
      

   }
]

const studentModel = mongoose.model('studentModel',studentSchema)
export default studentModel