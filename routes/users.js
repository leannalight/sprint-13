const router = require('express').Router();
const { getUsers, getUserId, createUser } = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/:_id', getUserId);

router.post('/', createUser);

module.exports = router;
