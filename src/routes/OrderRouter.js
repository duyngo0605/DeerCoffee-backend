const express = require("express")
const router = express.Router()
const OrderController = require('../controllers/OrderController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('', authUserMiddleWare, OrderController.createOrder)
router.put('/:id', authUserMiddleWare, OrderController.updateOrder)
router.delete('/:id', authMiddleWare, OrderController.deleteOrder)
router.get('/:id?', authUserMiddleWare, OrderController.getOrder)

module.exports = router