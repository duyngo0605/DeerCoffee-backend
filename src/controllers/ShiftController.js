const ShiftService = require('../services/ShiftService')

const createShift =  async (req, res) => {

    try {
        const response = await ShiftService.createShift(req.body)
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const getShift = async (req, res) => {
    try {
        const ShiftId = req.params.id
        const response = await ShiftService.getShift(ShiftId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const updateShift =  async (req, res) => {    
    try {
        const ShiftId = req.params.id
        if (!ShiftId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Shift is required'
            })
        }

        const data = req.body
        const response = await ShiftService.updateShift(ShiftId, data)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteShift = async (req,res) => {
    try {
        const ShiftId = req.params.id
        if (!ShiftId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Shift is not defined'
            })
        }
        const response = await ShiftService.deleteShift(ShiftId)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createShift,
    updateShift,
    deleteShift,
    getShift,
}