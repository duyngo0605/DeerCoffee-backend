const TimeKeeping = require('../models/TimeKeeping')

const createTimeKeeping = async (newTimeKeeping) => {
    return new Promise(async (resolve, reject) => {
        try {
            const createdTimeKeeping = await TimeKeeping.create(newTimeKeeping)
            if (createdTimeKeeping)
            { 
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: createdTimeKeeping
            })
            }
        }

        catch (e) {
            reject(e)
        }
    })
}


const getTimeKeeping = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                const allTimeKeeping = await TimeKeeping.find().populate('employee')
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allTimeKeeping
                })
            }
            else {
                const TimeKeeping = await TimeKeeping.findOne({
                    _id: id
                })
                if (TimeKeeping === null) {
                    resolve({
                        status: 'ERR',
                        message: 'The TimeKeeping is not defined'
                    })
                }
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: TimeKeeping
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateTimeKeeping = async (TimeKeepingId, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            const checkTimeKeeping = await TimeKeeping.findOne({
                _id: TimeKeepingId
            })
            if (!checkTimeKeeping){
                resolve({
                    status: 'ERR',
                    message: 'The TimeKeeping is not defined.'
                })
            }

            const updatedTimeKeeping = await TimeKeeping.findByIdAndUpdate(TimeKeepingId, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedTimeKeeping
            })
        }

        catch (e) {
            reject(e)
        }
    })
}

const deleteTimeKeeping = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTimeKeeping = await TimeKeeping.findOne({
                _id: id
            })
            if (checkTimeKeeping === null) {
                resolve({
                    status: 'ERR',
                    message: 'The TimeKeeping is not defined'
                })
            }

            await TimeKeeping.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete TimeKeeping success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createTimeKeeping,
    getTimeKeeping,
    updateTimeKeeping,
    deleteTimeKeeping,
}