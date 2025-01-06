const express = require("express")
const router = express.Router()
const VoucherController = require('../controllers/VoucherController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('', authMiddleWare, VoucherController.createVoucher)
router.put('/:id', authMiddleWare, VoucherController.updateVoucher)
router.delete('/:id', authMiddleWare, VoucherController.deleteVoucher)
router.get('/:id?', authUserMiddleWare, VoucherController.getVoucher)

module.exports = router