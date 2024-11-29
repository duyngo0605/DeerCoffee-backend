const Shift = require('../models/Shift')

const createShift = async (newShift) => {
    return new Promise(async (resolve, reject) => {
        try {
            const createdShift = await Shift.create(newShift)
            if (createdShift)
            { 
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: createdShift
            })
            }
        }

        catch (e) {
            reject(e)
        }
    })
}


const getShift = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                const allShift = await Shift.find()
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allShift
                })
            }
            else {
                const Shift = await Shift.findOne({
                    _id: id
                })
                if (Shift === null) {
                    resolve({
                        status: 'ERR',
                        message: 'The Shift is not defined'
                    })
                }
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: Shift
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateShift = async (ShiftId, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            const checkShift = await Shift.findOne({
                _id: ShiftId
            })
            if (!checkShift){
                resolve({
                    status: 'ERR',
                    message: 'The Shift is not defined.'
                })
            }

            const updatedShift = await Shift.findByIdAndUpdate(ShiftId, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedShift
            })
        }

        catch (e) {
            reject(e)
        }
    })
}

const deleteShift = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkShift = await Shift.findOne({
                _id: id
            })
            if (checkShift === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Shift is not defined'
                })
            }

            await Shift.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Shift success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createShift,
    getShift,
    updateShift,
    deleteShift,
}