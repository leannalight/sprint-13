# sprint-13

Backend project, API REST, node.js, express.js and MongoDB

## The latest version v0.0.3

git tag -a v0.0.3 -m "my version v0.0.3"

## Technologies used in the project:

- Node.js,
- Express.js.
- MongoDB,
- Mongoose (Object Data Modeling (ODM) library for MongoDB and Node.js),

## Instructions on how to deploy the project

1. For cloning, use git clone https://github.com/leannalight/sprint-13
2. Use npm i to reinstall packages.
3. Use npm run dev to open the project on the local server.
4. The npm run start command starts the server on localhost: 3030;
5. The npm run dev command starts the server on localhost: 3030 with hot reload;
6. Node.js application connects to the Mongo server at mongodb: // localhost: 27017 / mestodb;

- The linter is configured: in .eslintrc the exception for _id is added;
- Models with the names user and card are created and exported in schema files;

- Routes for users:
  - GET / users - returns all users from the database
  - GET / users /: userId - returns the user by _id
  - POST / users - creates a user with name, about and avatar passed in the request body.
- Routes for cards:
  - GET / cards - returns all cards from the database
  - POST / cards - creates a card with the name and link sent in the request body, owner affixed
  - DELETE / cards /: cardId - deletes a card by _id

- The data folder has been removed from the project, all data is taken from the database;
- The public folder and the static distribution of pages have been removed from the project, now it is only a REST API;
- If there is no user or card with the requested identifier, the API should return 404 response status and JSON: {"message": "There is no user with this id"};
- Invalid address {"message": "Requested resource not found"}
- If something goes wrong in any of the requests, the server returns a response with error status


