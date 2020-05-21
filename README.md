# sprint-13
Backend project, API REST, node.js, express.js, MongoDB

## v0.0.1 version
git tag -a v0.0.1 -m "my version v0.0.1"

## Цель: изучение Node.js, библиотеки express и знакомство с MongoDB
## Технологии: Node.js, Express.js, MongoDB, Git
### Что сделано:

- Настроен линтер: в .eslintrc добавлено исключение для _id;
- Node.js приложение подключается к серверу Mongo по адресу mongodb://localhost:27017/mestodb;
- Cозданы схема и модель пользователя с полями name, about и avatar, поля корректно валидируются [(module.exports = mongoose.model('user', userSchema);]
- Созданы схема и модель карточки с полями name, link, owner, likes и createdAt, поля корректно валидируются;
- Созданы контроллеры и роуты для пользователей и карточек:

    - GET /users возвращает всех пользователей из базы;

    - GET /users/:userId возвращает конкретного пользователя;

    - POST /users создаёт пользователя;

    - GET /cards возвращает все карточки всех пользователей;

    - POST /cards создаёт карточку;

    - DELETE /cards/:cardId — удаляет карточку по идентификатору

    - если в любом из запросов что-то идёт не так, сервер возвращает ответ с ошибкой и соответствующим ей статусом;

### Инструкция по установке: 

Для клонирования использован git clone https://github.com/leannalight/sprint-13, для переустановки пакетов - npm i, для открытия проекта на локальном сервере - npm run dev. Команда npm run start запускает сервер на localhost:3030, а npm run dev запускает сервер на localhost:3030 с хот релоудом;



