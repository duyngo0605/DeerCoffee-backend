const MenuItemService = require('../services/MenuItemService')

const createMenuItem =  async (req, res) => {

    try {
        const response = await MenuItemService.createMenuItem(req.body)
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const getMenuItem = async (req, res) => {
    try {
        const MenuItemId = req.params.id
        const response = await MenuItemService.getMenuItem(MenuItemId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const updateMenuItem =  async (req, res) => {    
    try {
        const MenuItemId = req.params.id
        if (!MenuItemId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The MenuItem is required'
            })
        }

        const data = req.body
        const response = await MenuItemService.updateMenuItem(MenuItemId, data)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteMenuItem = async (req,res) => {
    try {
        const MenuItemId = req.params.id
        if (!MenuItemId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The MenuItem is not defined'
            })
        }
        const response = await MenuItemService.deleteMenuItem(MenuItemId)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
    getMenuItem,
}