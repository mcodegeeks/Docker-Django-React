# Description
Portfolio Website: Docker + Django + React + Postgres + Nginx + Gunicorn

## Documents
```
/docs
  - ubuntu.md: setup guide for ubuntu
  - docker.md: docker commands
```

## Setting up

### Add environmental files
```
$ vi ./backend/.env
DEBUG=False
SECRET_KEY=<secret_key>
DJANGO_ALLOWED_HOSTS=<domain_name> <ip_addr> localhost 127.0.0.1 [::1]   # important: both domain and ip_addr are required for POST
SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=<database>
SQL_TEST_DATABASE=<test_database>
SQL_USER=<user>
SQL_PASSWORD=<password>
SQL_HOST=postgres
SQL_PORT=5432
CORS_ORIGIN_WHITELIST=http://<domain_name>:3000 http://localhost:3000
```
```
# only for local dev (python mangage.py runserver)
$ cp ./backend/.env ./backend/server/
$ vi ./backend/server/.env
DEBUG=True
```
```
$ vi ./frontend/.env
REACT_APP_HOST=http://localhost or http://<domain_name>
```
```
$ vi ./postgres/.env
POSTGRES_USER=<username>
POSTGRES_PASSWORD=<password>
POSTGRES_DB=<database>
```

### Local environment
```
$ id $User
uid=501(yhmun) gid=20(staff)

$ mkdir -p /Users/yhmun/Develop/volumes/postgres
$ mkdir -p /Users/yhmun/Develop/volumes/media

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/Users/yhmun/Develop/volumes/postgres \
    --opt o=uid=yhmun,gid=staff \
    --opt o=bind postgres

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/Users/yhmun/Develop/volumes/media \
    --opt o=bind media
```

### Production environment
```
$ sudo mkdir -p /var/opt/volumes/postgres
$ sudo mkdir -p /var/opt/volumes/media

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/var/opt/volumes/postgres \
    --opt o=bind postgres

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/var/opt/volumes/media \
    --opt o=bind media
```

## Start production
```
$ docker-compose up -d --build
```

## Local build

### Backend: Django
```
$ cd ./backend
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ pip install --upgrade pip
(venv) $ pip install -r requirements.txt
(venv) $ python manage.py runserver
(vend) $ deactivate
```

### Frontend: React
```
$ cd ./frontend
$ npm install
$ npm start
$ npm run build
```
