const express = require("express")
const router = express.Router()
const EmployeeController = require('../controllers/EmployeeController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('', EmployeeController.createEmployee)
router.put('/:id', authUserMiddleWare, EmployeeController.updateEmployee)
router.delete('/:id', authMiddleWare, EmployeeController.deleteEmployee)
router.get('/:id', authMiddleWare, EmployeeController.getEmployee)

module.exports = router