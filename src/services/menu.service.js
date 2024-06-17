const MenuItem = require('../models/menu.model');

class MenuService {
  async createMenuItem(data) {
    const menuItem = new MenuItem(data);
    return await menuItem.save();
  }

  async getMenuItemById(category, id) {
    return await MenuItem.findOne({ _id: id, category: category });
  }

  async updateMenuItem(category, id, data) {
    return await MenuItem.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteMenuItem(id) {
    return await MenuItem.findByIdAndDelete(id);
  }

  async getAllMenuItems() {
    return await MenuItem.find();
  }

  async getMenuItemsByCategory(category) {
    return await MenuItem.find({ category: category });
  }

  async getMenuItemByCategoryAndId(category, id) {
    return await MenuItem.findOne({ _id: id, category: category });
  }
}

module.exports = new MenuService();
