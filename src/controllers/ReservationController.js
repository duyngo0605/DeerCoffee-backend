const ReservationService = require('../services/ReservationService')

const createReservation =  async (req, res) => {

    try {
        const response = await ReservationService.createReservation(req.body)
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const getReservation = async (req, res) => {
    try {
        const ReservationId = req.params.id
        const response = await ReservationService.getReservation(ReservationId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const updateReservation =  async (req, res) => {    
    try {
        const ReservationId = req.params.id
        if (!ReservationId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Reservation is required'
            })
        }

        const data = req.body
        const response = await ReservationService.updateReservation(ReservationId, data)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteReservation = async (req,res) => {
    try {
        const ReservationId = req.params.id
        if (!ReservationId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Reservation is not defined'
            })
        }
        const response = await ReservationService.deleteReservation(ReservationId)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createReservation,
    updateReservation,
    deleteReservation,
    getReservation,
}