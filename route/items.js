const express = require('express')
const router = express.Router();
const itemController = require('../controller/items')

router.post('',itemController.addNewItems)
router.get('',itemController.getAllitems)
router.patch('',itemController.updateItems)
router.delete('',itemController.deleteItems)
router.get('/:id',itemController)

module.exports = router