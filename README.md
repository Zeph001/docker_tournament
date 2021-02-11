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
$ docker-compose up -d
```

#### Backend Test
###### Get the container ID of the backend with
```shell
$ docker ps
```
###### Create a bash or command line to the backend with
```shell
# docker exec -it <backend container id or name> /bin/bash
$ docker exec -it backend /bin/bash
```
###### Setup the test database
```shell
$ rake db:migrate RAILS_ENV=test
```
###### start the backend tests 
```shell
$ bundle exec rspec --format documentation
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