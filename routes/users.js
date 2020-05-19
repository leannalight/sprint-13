const router = require('express').Router();
const { getUsers, getUserbyId, createUser } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:_id', getUserbyId);
router.post('/', createUser);

module.exports = router;
