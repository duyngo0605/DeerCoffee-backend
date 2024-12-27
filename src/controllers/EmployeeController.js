const EmployeeService = require('../services/EmployeeService')

const createEmployee =  async (req, res) => {

    try {
        const response = await EmployeeService.createEmployee(req.body)
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const getEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id
        const response = await EmployeeService.getEmployee(employeeId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const updateEmployee =  async (req, res) => {    
    try {
        const employeeId = req.params.id
        if (!employeeId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Employee is required'
            })
        }

        const data = req.body
        const response = await EmployeeService.updateEmployee(employeeId, data)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteEmployee = async (req,res) => {
    try {
        const employeeId = req.params.id
        if (!employeeId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Employee is not defined'
            })
        }
        const response = await EmployeeService.deleteEmployee(employeeId)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const calculateSalary = async (req, res) => {
    try {
        const employeeId = req.params.id
        if (!employeeId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Employee is not defined'
            })
        }
        const data = req.body;
        const response = await EmployeeService.calculateSalary(employeeId, data)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
    calculateSalary,
}