const VoucherService = require('../services/VoucherService')

const createVoucher =  async (req, res) => {

    try {
        const response = await VoucherService.createVoucher(req.body)
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const getVoucher = async (req, res) => {
    try {
        const VoucherId = req.params.id
        const response = await VoucherService.getVoucher(VoucherId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const updateVoucher =  async (req, res) => {    
    try {
        const VoucherId = req.params.id
        if (!VoucherId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Voucher is required'
            })
        }

        const data = req.body
        const response = await VoucherService.updateVoucher(VoucherId, data)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteVoucher = async (req,res) => {
    try {
        const VoucherId = req.params.id
        if (!VoucherId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Voucher is not defined'
            })
        }
        const response = await VoucherService.deleteVoucher(VoucherId)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createVoucher,
    updateVoucher,
    deleteVoucher,
    getVoucher,
}