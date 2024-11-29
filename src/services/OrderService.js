const Order = require('../models/Order')

const createOrder = async (newOrder) => {
    return new Promise(async (resolve, reject) => {
        try {
            const createdOrder = await Order.create(newOrder)
            if (createdOrder)
            { 
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: createdOrder
            })
            }
        }

        catch (e) {
            reject(e)
        }
    })
}


const getOrder = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                const allOrder = await Order.find()
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allOrder
                })
            }
            else {
                const Order = await Order.findOne({
                    _id: id
                })
                if (Order === null) {
                    resolve({
                        status: 'ERR',
                        message: 'The Order is not defined'
                    })
                }
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: Order
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateOrder = async (OrderId, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            const checkOrder = await Order.findOne({
                _id: OrderId
            })
            if (!checkOrder){
                resolve({
                    status: 'ERR',
                    message: 'The Order is not defined.'
                })
            }

            const updatedOrder = await Order.findByIdAndUpdate(OrderId, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedOrder
            })
        }

        catch (e) {
            reject(e)
        }
    })
}

const deleteOrder = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkOrder = await Order.findOne({
                _id: id
            })
            if (checkOrder === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Order is not defined'
                })
            }

            await Order.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Order success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createOrder,
    getOrder,
    updateOrder,
    deleteOrder,
}