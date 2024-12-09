const ItemType = require('../models/ItemType')

const createItemType = async (newItemType) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(newItemType)
            const createdItemType = await ItemType.create(newItemType)
            if (createdItemType)
            { 
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: createdItemType
            })
            }
        }

        catch (e) {
            reject(e)
        }
    })
}


const getItemType = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                const allItemType = await ItemType.find()
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allItemType
                })
            }
            else {
                const ItemType = await ItemType.findOne({
                    _id: id
                })
                if (ItemType === null) {
                    resolve({
                        status: 'ERR',
                        message: 'The ItemType is not defined'
                    })
                }
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: ItemType
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateItemType = async (ItemTypeId, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            const checkItemType = await ItemType.findOne({
                _id: ItemTypeId
            })
            if (!checkItemType){
                resolve({
                    status: 'ERR',
                    message: 'The ItemType is not defined.'
                })
            }

            const updatedItemType = await ItemType.findByIdAndUpdate(ItemTypeId, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedItemType
            })
        }

        catch (e) {
            reject(e)
        }
    })
}

const deleteItemType = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkItemType = await ItemType.findOne({
                _id: id
            })
            if (checkItemType === null) {
                resolve({
                    status: 'ERR',
                    message: 'The ItemType is not defined'
                })
            }

            await ItemType.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete ItemType success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createItemType,
    getItemType,
    updateItemType,
    deleteItemType,
}