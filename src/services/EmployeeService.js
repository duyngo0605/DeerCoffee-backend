const Employee = require('../models/Employee')
const Shift = require('../models/Shift')

const createEmployee = async (newEmployee) => {
    return new Promise(async (resolve, reject) => {
        try {
            const createdEmployee = await Employee.create(newEmployee)
            if (createdEmployee)
            { 
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: createdEmployee
            })
            }
        }

        catch (e) {
            reject(e)
        }
    })
}


const getEmployee = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                const allEmployee = await Employee.find()
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allEmployee
                })
            }
            else {
                const Employee = await Employee.findOne({
                    _id: id
                })
                if (Employee === null) {
                    resolve({
                        status: 'ERR',
                        message: 'The Employee is not defined'
                    })
                }
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: Employee
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateEmployee = async (EmployeeId, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            const checkEmployee = await Employee.findOne({
                _id: EmployeeId
            })
            if (!checkEmployee){
                resolve({
                    status: 'ERR',
                    message: 'The Employee is not defined.'
                })
            }

            const updatedEmployee = await Employee.findByIdAndUpdate(EmployeeId, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedEmployee
            })
        }

        catch (e) {
            reject(e)
        }
    })
}

const deleteEmployee = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkEmployee = await Employee.findOne({
                _id: id
            })
            if (checkEmployee === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Employee is not defined'
                })
            }
            await Shift.deleteMany({employee: id})
            await Employee.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Employee success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee,
}