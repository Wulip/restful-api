const express = require('express');
const router =  express.Router();
const checkAuth = require('../middleware/check-auth');

const UsersControler = require('../controllers/users');

router.post('/signup', UsersControler.users_signup);

router.post('/login', UsersControler.users_login);

router.delete('/:userId', checkAuth, UsersControler.user_delete);

module.exports = router;