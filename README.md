# Prerequisites
* Install [Docker]( https://docs.docker.com/get-docker/)
    - test your installation with
    `docker-compose --version`


# Installation
For windows installation run `git config --global core.autocrlf false` before using git clone (see Troubleshooting under Windows for detailed information)
```shell
git clone https://github.com/Zeph001/docker_tournament.git ; cd docker_tournament

# Setup
docker-compose build
docker-compose run frontend yarn
docker-compose run backend bundle exec rake db:create
docker-compose run backend bundle exec rake db:migrate
```
## Start
```shell
# Option -d to run the containers in the background
docker-compose up -d
```
The project is now available on http://localhost:3000/

## Test

#### Backend Test
```shell
# First time: setup the test database
docker exec -it backend rake db:migrate RAILS_ENV=test

docker exec -it backend bundle exec rspec --format documentation
```
#### Frontend Test
```shell
docker exec -it frontend npm test
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

## Stop
```shell
docker-compose down
```

## Troubleshooting
### Windows
If you get the error `"bash\r" No such file or directory`. [Fix](https://stackoverflow.com/questions/29045140/env-bash-r-no-such-file-or-directory)
    This is because of the line-formatting difference between Unix and Windows style.
    To fix this make Git check out files with unix-style file endings on windows use:
   1. `git config --global core.autocrlf false`
   2. Run git clone again
   3. Go to Installation Section again

If you get a TypeError, when navigating to the Dashboard.
    This is because you have logged in with an improper User Account
    Logout again and use the register panel


If you have troubles contact me @sdaya001 @Zeph001