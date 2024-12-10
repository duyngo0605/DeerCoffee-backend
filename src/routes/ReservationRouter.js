const express = require("express")
const router = express.Router()
const ReservationController = require('../controllers/ReservationController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('', authMiddleWare, ReservationController.createReservation)
router.put('/:id', authUserMiddleWare, ReservationController.updateReservation)
router.delete('/:id', authMiddleWare, ReservationController.deleteReservation)
router.get('/:id?', authMiddleWare, ReservationController.getReservation)

module.exports = router