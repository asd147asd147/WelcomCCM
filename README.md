# Reference Code for Open Source Competitions by PNU SWEDU

## Requirements

- Node.js >= 14.x
- Yarn
- VSCode plugin
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Docker >= 19.03.x, Docker Desktop >= 2.3.x
- PostgreSQL >= 12.x

```
$ docker pull postgres
$ docker run -d -p 5432:5432 --name pgsql -e POSTGRES_PASSWORD=postgres postgres
```

- Clone from Github

```
$ git clone https://github.com/sigmadream/pnu-swedu-ccm.git
$ cd pnu-swedu-ccm
$ yarn
```

- dotEnv(`.env`) setting

```

copy .env env

```

- Database init

```

$ yarn db:create
$ yarn db:migrate
$ yarn db:seed

```

- Run

```
$ yarn dev
```
