const MenuItem = require('../models/MenuItem')

const createMenuItem = async (newMenuItem) => {
    return new Promise(async (resolve, reject) => {
        try {
            const createdMenuItem = await MenuItem.create(newMenuItem)
            if (createdMenuItem)
            { 
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: createdMenuItem
            })
            }
        }

        catch (e) {
            reject(e)
        }
    })
}


const getMenuItem = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                const allMenuItem = await MenuItem.find()
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allMenuItem
                })
            }
            else {
                const MenuItem = await MenuItem.findOne({
                    _id: id
                })
                if (MenuItem === null) {
                    resolve({
                        status: 'ERR',
                        message: 'The MenuItem is not defined'
                    })
                }
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: MenuItem
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateMenuItem = async (MenuItemId, data) => {
    return new Promise(async (resolve, reject) => {

        try {
            const checkMenuItem = await MenuItem.findOne({
                _id: MenuItemId
            })
            if (!checkMenuItem){
                resolve({
                    status: 'ERR',
                    message: 'The MenuItem is not defined.'
                })
            }

            const updatedMenuItem = await MenuItem.findByIdAndUpdate(MenuItemId, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedMenuItem
            })
        }

        catch (e) {
            reject(e)
        }
    })
}

const deleteMenuItem = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkMenuItem = await MenuItem.findOne({
                _id: id
            })
            if (checkMenuItem === null) {
                resolve({
                    status: 'ERR',
                    message: 'The MenuItem is not defined'
                })
            }

            await MenuItem.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete MenuItem success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createMenuItem,
    getMenuItem,
    updateMenuItem,
    deleteMenuItem,
}