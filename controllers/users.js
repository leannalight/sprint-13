const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((error) => res.status(500).send({ message: error.message }));
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
    .catch((error) => res.status(500).send({ message: error.message }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((error) => res.status(500).send({ message: error.message }));
};
