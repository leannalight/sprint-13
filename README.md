# sprint-13
## version v0.0.5
## Цель: продолжение изучения серверной разработки на Node.js и веб-фреймворка Express. В этом проекте мы продолжаем работу над [спринт-12](https://github.com/leannalight/sprint-12-mesto), который является бэкенд-частью проекта [Место](https://leannalight.github.io/Mesto-project-Yandex/).
### Начали делать REST API проекта и связали его с базой данных

## Что дополнили в проекте?

- Настроен линтер (в .eslintrc добавлено исключение для ```_id```)
- Настроили подключение к к Mongo
  - Node.js приложение подключается к серверу Mongo по адресу ```mongodb://localhost:27017/mestodb```;
- Создали схемы и модели пользователей и карточек ```module.exports = mongoose.model('user', userSchema);```, поля корректно валидируются;
- Создали контроллеры и роуты для пользователей и карточек
- Роуты для пользователей:
```
  GET /users — возвращает всех пользователей
  GET /users/:userId - возвращает пользователя по _id
  POST /users — создаёт пользователя
```
- Роуты для карточек:
```
  GET /cards — возвращает все карточки
  POST /cards — создаёт карточку
  DELETE /cards/:cardId — удаляет карточку по идентификатору
```
- если в любом из запросов что-то идёт не так, сервер возвращает ответ с ошибкой и соответствующим ей статусом;
- папки public и data удалены;

### Инструкция по установке:
1. для клонирования используйте ```git clone https://github.com/leannalight/sprint-13```
2. для переустановки пакетов ```npm i```.
3. команда ```npm run start``` запускает сервер на ```localhost:3000```;
4. команда ```npm run dev``` запускает сервер на ```localhost:3000 с хот релоудом```;

### Стек технологий:
- Node.js,
- Express.js.
- MongoDB,
- Mongoose (Object Data Modeling (ODM) library for MongoDB and Node.js)
