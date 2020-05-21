const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => {
      if (cards.length === 0) {
        return res.status(404).send({ message: 'Карточки отсутствуют в списке' });
      }
      return res.send({ data: cards });
    })
    .catch((error) => res.status(500).send({ message: error.message }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((error) => {
      if (error.name === error.ValidationError) {
        return res.status(400).send({ message: error.message });
      }
      if (error.name === error.CastError) {
        return res.status(400).send({ message: error.message });
      }
      return res.status(500).send({ message: error.message });
    });
};

module.exports.deleteCardbyId = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      const cardFind = card.find((items) => items.id === req.params.cardId);
      if (!cardFind) {
        return res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      return res.send({ data: cardFind });
    })
    .catch((error) => {
      if (error.name === error.ValidationError) {
        return res.status(400).send({ message: error.message });
      }
      if (error.name === error.CastError) {
        return res.status(400).send({ message: error.message });
      }
      return res.status(500).send({ message: error.message });
    });
};
