const express = require("express")
const router = express.Router()
const ShiftController = require('../controllers/ShiftController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('', authMiddleWare, ShiftController.createShift)
router.put('/:id', authUserMiddleWare, ShiftController.updateShift)
router.delete('/:id', authMiddleWare, ShiftController.deleteShift)
router.get('/:id?', authMiddleWare, ShiftController.getShift)

module.exports = router