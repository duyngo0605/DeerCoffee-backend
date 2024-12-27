const ReportService = require('../services/ReportService');

const getRevenueByDay = async (req, res) => {
    try {
            const response = await ReportService.getRevenueByDay(req.body)
            return res.status(200).json(response)
        }
        catch (e) {
            return res.status(404).json({
                message: e
            })
        }
}
const getRevenueByMonth = async (req, res) => {
    try {
            const response = await ReportService.getRevenueByMonth(req.body)
            return res.status(200).json(response)
        }
        catch (e) {
            return res.status(404).json({
                message: e
            })
        }
}
const getRevenueByYear = async (req, res) => {
    try {
            const response = await ReportService.getRevenueByYear(req.body)
            return res.status(200).json(response)
        }
        catch (e) {
            return res.status(404).json({
                message: e
            })
        }
}

const getMostOrderedMenuItemsByDay = async (req, res) => {
    try {
        const response = await ReportService.getMostOrderedMenuItemsByDay(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
};

const getMostOrderedMenuItemsByMonth = async (req, res) => {
    try {
        const response = await ReportService.getMostOrderedMenuItemsByMonth(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
};

const getMostOrderedMenuItemsByYear = async (req, res) => {
    try {
        const response = await ReportService.getMostOrderedMenuItemsByYear(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
};

module.exports = {
    getRevenueByDay,
    getRevenueByMonth,
    getRevenueByYear,
    getMostOrderedMenuItemsByDay,
    getMostOrderedMenuItemsByMonth,
    getMostOrderedMenuItemsByYear
};