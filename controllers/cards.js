const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => {
      if (cards.length === 0) {
        return res.send({ data: cards });
      }
      return res.send({ data: cards });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        return res.status(400).send({ message: error.message });
      }
      if (error.name === 'CastError') {
        return res.status(400).send({ message: error.message });
      }
      return res.status(500).send({ message: error.message });
    });
};


module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        return res.status(400).send({ message: error.message });
      }
      if (error.name === 'CastError') {
        return res.status(400).send({ message: error.message });
      }
      return res.status(500).send({ message: error.message });
    });
};

module.exports.deleteCardbyId = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Карточка не найдена' });
      } else {
        res.send({ data: card });
      }
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        return res.status(400).send({ message: error.message });
      }
      if (error.name === 'CastError') {
        return res.status(400).send({ message: error.message });
      }
      return res.status(500).send({ message: error.message });
    });
};
