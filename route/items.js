const express = require('express')
const router = express.Router();
const itemController = require('../controller/items')

router.post('',itemController.addNewItems)

module.exports = router