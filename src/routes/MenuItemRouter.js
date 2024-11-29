const express = require("express")
const router = express.Router()
const MenuItemController = require('../controllers/MenuItemController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('', MenuItemController.createMenuItem)
router.put('/:id', authUserMiddleWare, MenuItemController.updateMenuItem)
router.delete('/:id', authMiddleWare, MenuItemController.deleteMenuItem)
router.get('/:id?', authMiddleWare, MenuItemController.getMenuItem)

module.exports = router