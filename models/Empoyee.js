import mongoose from "mongoose";
const schema = new mongoose.Schema({
    emp_name: {
        type: "String",
        require: true
    },
    emp_salary: {
        type: "number",
        require: true,
    },
    emp_role: {
        type: "String",
        require: true
    }

})

export const Employee = mongoose.model('Employee', schema);