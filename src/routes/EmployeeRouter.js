const express = require("express")
const router = express.Router()
const EmployeeController = require('../controllers/EmployeeController')
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('', authMiddleWare, EmployeeController.createEmployee)
router.put('/:id', authMiddleWare, EmployeeController.updateEmployee)
router.delete('/:id', authMiddleWare, EmployeeController.deleteEmployee)
router.get('/:id?', authMiddleWare, EmployeeController.getEmployee)
router.post('/salary/:id?', authMiddleWare, EmployeeController.calculateSalary)

module.exports = router