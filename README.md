# Prerequisites
* [Docker]( https://docs.docker.com/get-docker/)
    - test your installation with
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
# Option -d to run the containers in the background
$ docker-compose up -d
```
http://localhost:3000/

## Stop
```shell
$ docker-compose down
```

#### Backend Test
```shell
docker exec -it backend rake db:migrate RAILS_ENV=test
docker exec -it backend bundle exec rspec --format documentation
```
#### Frontend Test
```shell
$ docker exec -it frontend npm test
```

#### Access Database via pgadmin
1. Go to http://localhost:8080/
2. Enter username: admin@docker.com and password: secret 
3. In the Browser select Servers > Create > Server
4. On the General Tab enter Name: "docker postgres" (or whatever you want)
5. In the Connection tab enter 
```
hostname: psql-server
port: 5432
Maintenance Database: postgres
Username: admin
Password: secret
```
Save password and hit save. Connect to the server by double clicking it on the Browser and view the tables in the schemas.

If you have troubles contact me @sdaya001


