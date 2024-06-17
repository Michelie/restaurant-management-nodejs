const express = require('express');
const MenuController = require('../controllers/menu.controller');

const router = express.Router();

router.post('/', MenuController.createMenuItem);
router.get('/:id', MenuController.getMenuItemById);
router.put('/:id', MenuController.updateMenuItem);
router.delete('/:id', MenuController.deleteMenuItem);
router.get('/', MenuController.getAllMenuItems);

module.exports = router;
