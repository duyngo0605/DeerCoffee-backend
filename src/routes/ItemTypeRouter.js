const express = require("express")
const router = express.Router()
const ItemTypeController = require('../controllers/ItemTypeController')
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('', authMiddleWare, ItemTypeController.createItemType)
router.put('/:id', authMiddleWare, ItemTypeController.updateItemType)
router.delete('/:id', authMiddleWare, ItemTypeController.deleteItemType)
router.get('/:id?', authMiddleWare, ItemTypeController.getItemType)

module.exports = router