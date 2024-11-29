const Reservation = require('../models/Reservation')

const createReservation = async (newReservation) => {
    return new Promise(async (resolve, reject) => {
        try {
            const createdReservation = await Reservation.create(newReservation)
            if (createdReservation)
            { 
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: createdReservation
            })
            }
        }

        catch (e) {
            reject(e)
        }
    })
}


const getReservation = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                const allReservation = await Reservation.find()
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allReservation
                })
            }
            else {
                const Reservation = await Reservation.findOne({
                    _id: id
                })
                if (Reservation === null) {
                    resolve({
                        status: 'ERR',
                        message: 'The Reservation is not defined'
                    })
                }
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: Reservation
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateReservation = async (ReservationId, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            const checkReservation = await Reservation.findOne({
                _id: ReservationId
            })
            if (!checkReservation){
                resolve({
                    status: 'ERR',
                    message: 'The Reservation is not defined.'
                })
            }

            const updatedReservation = await Reservation.findByIdAndUpdate(ReservationId, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedReservation
            })
        }

        catch (e) {
            reject(e)
        }
    })
}

const deleteReservation = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkReservation = await Reservation.findOne({
                _id: id
            })
            if (checkReservation === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Reservation is not defined'
                })
            }

            await Reservation.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Reservation success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createReservation,
    getReservation,
    updateReservation,
    deleteReservation,
}