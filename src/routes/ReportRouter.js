const express = require("express")
const router = express.Router()
const ReportController = require('../controllers/ReportController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/revenue/by-day', ReportController.getRevenueByDay)
router.post('/revenue/by-month', ReportController.getRevenueByMonth)
router.post('/revenue/by-year', ReportController.getRevenueByYear)

module.exports = router