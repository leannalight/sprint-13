const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getUserId = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      const userFind = data.find((item) => item._id === req.params._id);
      if (!userFind) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send({ data: userFind });
    })
    .catch((error) => {
      if (error.name === error.ValidationError) {
        res.status(400).send({ message: error.message });
      }
      if (error.name === error.CastError) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
