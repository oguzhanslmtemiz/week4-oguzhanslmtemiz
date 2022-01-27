# TypeScript Auth with JWT & Session

## Tech Stack

**Server:** Node, Express, Mysql, TypeORM, JWT, joi, bcrypt, CORS, Helmet, Dotenv, express-session, http-status, nodemon, ts-node

## API Reference

| Route      | HTTP Verb | POST body                                                   | Description | Auth   |
| ---------- | --------- | ----------------------------------------------------------- | ----------- | ------ |
| /login     | `POST`    | { username: 'username', password: 'password' }              | Login       |        |
| /register  | `POST`    | { name: 'name' ,username: 'username', password: 'password'} | Register    |        |
| /dashboard | `GET`     |                                                             | Dashboard   | Bearer |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

> `PORT` `SESSION_SECRET` `JWT_SECRET` `TYPEORM_HOST` `TYPEORM_PORT` `TYPEORM_USERNAME` `TYPEORM_PASSWORD` `TYPEORM_DATABASE`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Kodluyoruz-NodeJs-Bootcamp/week4-oguzhanslmtemiz.git
```

Go to the project directory

```bash
  cd week4-oguzhanslmtemiz
```

Install dependencies

```bash
  yarn install
```

Copy the .env.example file and call it .env and edit the variables as you need.

```bash
  cp .env.example .env
```

Set your database credentials and create a MySQL database based on the variables in the .env file

```bash
  > Create a user with all permissions. username: test, password: test

  mysql> CREATE DATABASE gustobootcampw4

  * All necessary tables will be created automatically when the user is registered
```

Start the server

```bash
  yarn start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
