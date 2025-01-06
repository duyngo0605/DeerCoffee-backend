const express = require("express")
const router = express.Router()
const ReservationController = require('../controllers/ReservationController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('', authUserMiddleWare, ReservationController.createReservation)
router.put('/:id', authUserMiddleWare, ReservationController.updateReservation)
router.delete('/:id', authUserMiddleWare, ReservationController.deleteReservation)
router.get('/:id?', authUserMiddleWare, ReservationController.getReservation)

module.exports = router