const express = require('express');
const MenuController = require('../controllers/menu.controller');

const router = express.Router();

router.post('/', MenuController.createMenuItem);
router.get('/', MenuController.getAllMenuItems);
router.get('/:category', MenuController.getMenuByCategory);
router.get('/:category/:id', MenuController.getMenuItemByCategoryAndId); //get by category and id
router.put('/:category/:id', MenuController.updateMenuItem);
router.delete('/:id', MenuController.deleteMenuItem);
router.get('/:category', MenuController.getMenuByCategory);

// router.get('/:id', MenuController.getMenuItemById);
// router.put('/:id', MenuController.updateMenuItem);
// router.delete('/:id', MenuController.deleteMenuItem);

module.exports = router;
