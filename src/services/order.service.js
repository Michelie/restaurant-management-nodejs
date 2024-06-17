const Order = require('../models/order.model');

class OrderService {
  async createOrder(data) {
    const order = new Order(data);
    return await order.save();
  }

  async getOrderById(id) {
    return await Order.findById(id).populate('items.menuItem');
  }

  async getAllOrders() {
    return await Order.find().populate('items.menuItem');
  }
}

module.exports = new OrderService();
