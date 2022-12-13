import { Employee } from "../models/Empoyee.js";

export const store_employee = async (req, res) => {
    const { emp_name, emp_salary, emp_role } = req.body;
    const employee_info = { emp_name, emp_salary, emp_role };
    try {
        await Employee.create(employee_info)
        res.send({
            message: "Employee created successfully",
        })
    } catch (error) {
        res.send({
            message: "Failed to create employee",
        })
    }
}

export const getEmployee = async (req, res) => {
    const employees = await Employee.find();
    res.send({ employees })
}

export const findEmployee = async (req, res) => {
    try {
        const getEmployee = await Employee.findById({ _id: req.params.id })
        res.status(400).json({
            message: "Employee is exists",
            getEmployee
        })
    } catch (error) {
        res.status(400).json({
            message: "Employee is not exists",
        })
    }

}

export const deleteEmployee = async (req, res) => {
    await Employee.deleteOne({ _id: req.params.id });
    res.send({ message: "Employee Deleted Successfully", })
}

export const updateEmployee = async (req, res) => {
    // const { emp_name, emp_salary, emp_role } = req.body;
    // const employee_update = new Employee({ emp_name, emp_salary, emp_role });
    const employee = {
        emp_name: req.body.emp_name,
        emp_salary: req.body.emp_salary,
        emp_role: req.body.emp_role
    }
    try {
        const updated_employee = await Employee.findByIdAndUpdate({ _id: req.params.id }, employee);
        res.send({ message: "Employee updated successfully", updated_employee })
    } catch (error) {
        res.send({ error });
    }

}
