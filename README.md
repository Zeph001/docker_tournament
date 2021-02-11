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



