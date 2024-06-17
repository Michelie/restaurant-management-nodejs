const MenuService = require('../services/menu.service');

class MenuController {
  async createMenuItem(req, res) {
    try {
      const item = await MenuService.createMenuItem(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getMenuItemById(req, res) {
    try {
      const { id } = req.params;
      const item = await MenuService.getMenuItemById(id);
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ message: 'Menu item not found' });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async updateMenuItem(req, res) {
    try {
      const { category, id } = req.params;
      const item = await MenuService.updateMenuItem(category, id, req.body);
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ message: 'Menu item not found' });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteMenuItem(req, res) {
    try {
      const { id } = req.params;
      const item = await MenuService.deleteMenuItem(id);
      if (item) {
        res.status(200).json({ message: 'Menu item deleted successfully' });
      } else {
        res.status(404).json({ message: 'Menu item not found' });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAllMenuItems(req, res) {
    try {
      const items = await MenuService.getAllMenuItems();
      res.status(200).json(items);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getMenuByCategory(req, res) {
    try {
      const { category } = req.params;
      const menuItems = await MenuService.getMenuItemsByCategory(category);
      res.status(200).json(menuItems);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getMenuItemByCategoryAndId(req, res) {
    try {
      const { category, id } = req.params;
      const item = await MenuService.getMenuItemByCategoryAndId(category, id);
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ message: 'Menu item not found' });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new MenuController();
