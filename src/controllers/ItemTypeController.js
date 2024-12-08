const ItemTypeService = require('../services/ItemTypeService')

const createItemType =  async (req, res) => {

    try {
        const response = await ItemTypeService.createItemType(req.body)
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const getItemType = async (req, res) => {
    try {
        const ItemTypeId = req.params.id
        const response = await ItemTypeService.getItemType(ItemTypeId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const updateItemType =  async (req, res) => {    
    try {
        const ItemTypeId = req.params.id
        if (!ItemTypeId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ItemType is required'
            })
        }

        const data = req.body
        const response = await ItemTypeService.updateItemType(ItemTypeId, data)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteItemType = async (req,res) => {
    try {
        const ItemTypeId = req.params.id
        if (!ItemTypeId)
        {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ItemType is not defined'
            })
        }
        const response = await ItemTypeService.deleteItemType(ItemTypeId)
        return res.status(200).json(response)
    }

    catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createItemType,
    updateItemType,
    deleteItemType,
    getItemType,
}