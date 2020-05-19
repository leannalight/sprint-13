const router = require('express').Router();
const { getCards, createCard, deleteCardbyId } = require('../controllers/cards');

router.get('/cards', getCards);
router.post('/', createCard);
router.delete('/', deleteCardbyId);

module.exports = router;
