# express online coffee shop api

The online coffee shop application programming interface provides a JSON API.

### install dependencies

```sh
$ npm install
```

### run development server

```sh
$ npm run server
```

### build production files

```sh
$ npm run build
```

#### Endpoints:

```
@GET "/"
returns "coffee house api"

@POST "/api/v1/users/register"
@headers { "Content-Type": "application/json" }
@body { "email": "user@email.com", "password": "password" }

@POST "/api/v1/users/login
@headers { "Content-Type": "application/json" }
@body { "email": "user@email.com", "password": "password" }
```
