const express = require("express")
const router = express.Router()
const ItemTypeController = require('../controllers/ItemTypeController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('', ItemTypeController.createItemType)
router.put('/:id', authUserMiddleWare, ItemTypeController.updateItemType)
router.delete('/:id', authMiddleWare, ItemTypeController.deleteItemType)
router.get('/:id?', authMiddleWare, ItemTypeController.getItemType)

module.exports = router