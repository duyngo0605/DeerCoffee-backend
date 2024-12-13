const express = require("express")
const router = express.Router()
const VoucherController = require('../controllers/VoucherController')
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('', authMiddleWare, VoucherController.createVoucher)
router.put('/:id', authMiddleWare, VoucherController.updateVoucher)
router.delete('/:id', authMiddleWare, VoucherController.deleteVoucher)
router.get('/:id?', authMiddleWare, VoucherController.getVoucher)

module.exports = router