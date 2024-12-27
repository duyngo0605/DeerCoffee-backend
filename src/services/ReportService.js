const Order = require('../models/Order');

const getRevenueByDay = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {date} = data;
            const start = new Date(date);
            start.setHours(0, 0, 0, 0);
            const end = new Date(date);
            end.setHours(23, 59, 59, 999);

            const orders = await Order.find({
                orderDate: {
                    $gte: start,
                    $lt: end
                },
                status: 'completed'
            });

            const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: totalRevenue
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getRevenueByMonth = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {month, year} = data;
            const start = new Date(year, month - 1, 1);
            const end = new Date(year, month, 0, 23, 59, 59, 999);

            const orders = await Order.find({
                orderDate: {
                    $gte: start,
                    $lt: end
                },
                status: 'completed'
            });

            const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: totalRevenue
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getRevenueByYear = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {year} = data;
            const start = new Date(year, 0, 1);
            const end = new Date(year, 11, 31, 23, 59, 59, 999);

            const orders = await Order.find({
                orderDate: {
                    $gte: start,
                    $lt: end
                },
                status: 'completed'
            });

            const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: totalRevenue
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getMostOrderedMenuItemsByDay = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { date } = data;
            const start = new Date(date);
            start.setHours(0, 0, 0, 0);
            const end = new Date(date);
            end.setHours(23, 59, 59, 999);

            const orders = await Order.aggregate([
                { $match: { orderDate: { $gte: start, $lt: end }, status: 'completed' } },
                { $unwind: '$items' },
                { $group: { _id: '$items.item', quantity: { $sum: '$items.quantity' } } },
                { $sort: { quantity: -1 } },
                { $lookup: { from: 'menuitems', localField: '_id', foreignField: '_id', as: 'menuItemDetails' } },
                { $unwind: '$menuItemDetails' },
                { $project: { _id: 1, quantity: 1, revenue: 1, name: '$menuItemDetails.name', image: '$menuItemDetails.image' } }
            ]);

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: orders
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getMostOrderedMenuItemsByMonth = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { month, year } = data;
            const start = new Date(year, month - 1, 1);
            const end = new Date(year, month, 0, 23, 59, 59, 999);

            const orders = await Order.aggregate([
                { $match: { orderDate: { $gte: start, $lt: end }, status: 'completed' } },
                { $unwind: '$items' },
                { $group: { _id: '$items.item', quantity: { $sum: '$items.quantity' } } },
                { $sort: { quantity: -1 } },
                { $lookup: { from: 'menuitems', localField: '_id', foreignField: '_id', as: 'menuItemDetails' } },
                { $unwind: '$menuItemDetails' },
                { $project: { _id: 1, quantity: 1, revenue: 1, name: '$menuItemDetails.name', image: '$menuItemDetails.image' } }
            ]);

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: orders
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getMostOrderedMenuItemsByYear = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { year } = data;
            const start = new Date(year, 0, 1);
            const end = new Date(year, 11, 31, 23, 59, 59, 999);

            const orders = await Order.aggregate([
                { $match: { orderDate: { $gte: start, $lt: end }, status: 'completed' } },
                { $unwind: '$items' },
                { $group: { _id: '$items.item', quantity: { $sum: '$items.quantity' } } },
                { $sort: { quantity: -1 } },
                { $lookup: { from: 'menuitems', localField: '_id', foreignField: '_id', as: 'menuItemDetails' } },
                { $unwind: '$menuItemDetails' },
                { $project: { _id: 1, quantity: 1, revenue: 1, name: '$menuItemDetails.name', image: '$menuItemDetails.image' } }
            ]);

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: orders
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    getRevenueByDay,
    getRevenueByMonth,
    getRevenueByYear,
    getMostOrderedMenuItemsByDay,
    getMostOrderedMenuItemsByMonth,
    getMostOrderedMenuItemsByYear
};