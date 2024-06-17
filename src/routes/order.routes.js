const express = require('express');
const OrderController = require('../controllers/order.controller');

const router = express.Router();

router.post('/', OrderController.createOrder);
router.get('/:id', OrderController.getOrderById);
router.get('/', OrderController.getAllOrders);

module.exports = router;
