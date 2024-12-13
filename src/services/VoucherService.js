const Voucher = require('../models/Voucher')
const Shift = require('../models/Shift')

const createVoucher = async (newVoucher) => {
    return new Promise(async (resolve, reject) => {
        try {
            const createdVoucher = await Voucher.create(newVoucher)
            if (createdVoucher)
            { 
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: createdVoucher
            })
            }
        }

        catch (e) {
            reject(e)
        }
    })
}


const getVoucher = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                const allVoucher = await Voucher.find()
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allVoucher
                })
            }
            else {
                const Voucher = await Voucher.findOne({
                    _id: id
                })
                if (Voucher === null) {
                    resolve({
                        status: 'ERR',
                        message: 'The Voucher is not defined'
                    })
                }
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: Voucher
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateVoucher = async (VoucherId, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            const checkVoucher = await Voucher.findOne({
                _id: VoucherId
            })
            if (!checkVoucher){
                resolve({
                    status: 'ERR',
                    message: 'The Voucher is not defined.'
                })
            }

            const updatedVoucher = await Voucher.findByIdAndUpdate(VoucherId, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedVoucher
            })
        }

        catch (e) {
            reject(e)
        }
    })
}

const deleteVoucher = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkVoucher = await Voucher.findOne({
                _id: id
            })
            if (checkVoucher === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Voucher is not defined'
                })
            }
            await Shift.deleteMany({Voucher: id})
            await Voucher.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Voucher success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createVoucher,
    getVoucher,
    updateVoucher,
    deleteVoucher,
}