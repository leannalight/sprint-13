const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      if (users.length === 0) {
        return res.status(404).send({ message: 'Список пользователей пуст' });
      }
      return res.send({ data: users });
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

module.exports.getUserbyId = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      const userFind = user.find((item) => item.id === req.params.id);
      if (!userFind) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send({ data: userFind });
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

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
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
