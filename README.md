# Prerequisites
* [Docker]( https://docs.docker.com/get-docker/)
    - Installation testen
    `docker-compose --version`


# Installation
```shell
$ git clone https://gitlab.cs.hs-rm.de/tigerson/wahlprojekt/dockerproject.git && cd dockerproject

# Setup
$ docker-compose build
$ docker-compose run frontend yarn
$ docker-compose run backend bundle exec rake db:create
$ docker-compose run backend bundle exec rake db:migrate
```
## Start
```shell
$ docker-compose up -d
```

#### Backend Test
###### Container ID des Backends raussuchen
```shell
$ docker ps
```
###### Bash auf das backend erstellen
```shell
$ docker exec -it <backend container id> /bin/bash
```
###### Test Datenbank setup
```shell
$ rake db:migrate RAILS_ENV=test
```
###### Tests starten
```shell
$ bundle exec rspec --format documentation
```
#### Access Database via pgadmin
1. go to http://localhost:8080/
2. enter username: admin@docker.com and password: secret 
3. In the Browser select Servers > Create > Server
4. On the General Tab enter whatever name you wish
5. In the connection tab enter 
```
hostname: psql-server
port: 5432
Maintenance Database: postgres
Username: admin
Password: secret
```
Save password and hit save. Connect to the server by double clicking it on the Browser and view the tables in the schemas.


