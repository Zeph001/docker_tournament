# Prerequisites
* Install [Docker]( https://docs.docker.com/get-docker/)
    - test your installation with
    `docker-compose --version`
* Preferably run on a x86_64-linux Platform


# Installation
For temporarily fixed windows installation run `git config --global core.autocrlf false` before using git clone (see Troubleshooting under Windows for detailed information).  And restore gits old behaviour by running `git config --global core.autocrlf true`
```shell
git clone https://github.com/Zeph001/docker_tournament.git ; cd docker_tournament

# Initial Setup
docker-compose up --no-start --build
docker-compose run frontend npm
docker-compose run backend bundle exec rake db:create
docker-compose run backend bundle exec rake db:migrate
```
## Start
```shell
# For the initial setup id recommend running docker-compose without -d so you see when the servers are done starting. Afterwards you can ctrl+c to shutdown the container and run the command with -d so the services run in the background and you can keep using the terminal. 
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
* If you get the error `"bash\r" No such file or directory`. [Fix](https://stackoverflow.com/questions/29045140/env-bash-r-no-such-file-or-directory)
  This is because of the line-formatting difference between Unix and Windows style.
  To fix this temporarily make Git check out files with unix-style file endings on windows use:
   1. `git config --global core.autocrlf false`
   2. Run git clone again
   3. `git config --global core.autocrlf true`
   4. Go to Installation Section again and continue the Setup

* If you get a TypeError, when navigating to the Dashboard.
  This is because you have logged in with an improper User Account
    Logout again and use the register panel

* If you encounter further problems using windows. Please try on a x86_64-linux Platform.


If you have troubles contact me @sdaya001 @Zeph001