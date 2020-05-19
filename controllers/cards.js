const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => res.send({ data: cards }))
    .catch((error) => res.status(500).send({ message: error.message }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((error) => res.status(500).send({ message: error.message }));
};

module.exports.deleteCardbyId = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card !== null) {
        res.send({ message: 'Карточка успешно удалена' });
      } else {
        res.status(404).send({ message: 'Нет карточки с таким id' });
      }
    })
    .catch((error) => res.status(500).send({ message: error.message }));
};
