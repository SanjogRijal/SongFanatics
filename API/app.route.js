const express = require('express');
const router = express.Router();

module.exports = router;

const usersController = require('./controllers/users.controller');

router.get('/users/all',usersController.getAllUsers);