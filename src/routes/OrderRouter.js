const express = require("express")
const router = express.Router()
const OrderController = require('../controllers/OrderController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('', OrderController.createOrder)
router.put('/:id', authUserMiddleWare, OrderController.updateOrder)
router.delete('/:id', authMiddleWare, OrderController.deleteOrder)
router.get('/:id?', authMiddleWare, OrderController.getOrder)

module.exports = router