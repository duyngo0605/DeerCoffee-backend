const OrderService = require('../services/OrderService')

const createOrder =  async (req, res) => {

    try {
        const response = await OrderService.createOrder(req.body)
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const getOrder = async (req, res) => {
    try {
        const OrderId = req.params.id
        const response = await OrderService.getOrder(OrderId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const updateOrder =  async (req, res) => {    
    try {
        const OrderId = req.params.id
        if (!OrderId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Order is required'
            })
        }

        const data = req.body
        const response = await OrderService.updateOrder(OrderId, data)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteOrder = async (req,res) => {
    try {
        const OrderId = req.params.id
        if (!OrderId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The Order is not defined'
            })
        }
        const response = await OrderService.deleteOrder(OrderId)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
}