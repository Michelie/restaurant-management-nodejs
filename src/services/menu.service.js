const MenuItem = require('../models/menu.model');

class MenuService {
  async createMenuItem(data) {
    const menuItem = new MenuItem(data);
    return await menuItem.save();
  }

  async getMenuItemById(id) {
    return await MenuItem.findById(id);
  }

  async updateMenuItem(id, data) {
    return await MenuItem.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteMenuItem(id) {
    return await MenuItem.findByIdAndDelete(id);
  }

  async getAllMenuItems() {
    return await MenuItem.find();
  }
}

module.exports = new MenuService();
