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
docker-compose run --rm backend bundle exec rake db:create
docker-compose run --rm backend bundle exec rake db:migrate
```
## Start
 For the initial setup I recommend running `docker-compose up` without -d so you see when the containers are done starting. Afterwards you can ctrl+c to shutdown the container and run the command with -d so the services run in the background and you can keep using the terminal.
```shell
docker-compose up -d
```
The project is now available on http://localhost:3000/

## Test

#### Backend Test
```shell
# First time: setup the test database
docker exec -it tournament_backend rake db:migrate RAILS_ENV=test
docker exec -it tournament_backend bundle exec rspec --format documentation
```
#### Frontend Test
```shell
docker exec -it tournament_frontend npm test
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
* If you get a TypeError: Cannot read property 'email' of undefined, when navigating to the Dashboard.
  This is because you have logged in with an improper User Account
  1. Refresh the site
  2. Use the registration panel

### Windows
* If you get the error `'bash\r' No such file or directory`. [Fix](https://stackoverflow.com/questions/29045140/env-bash-r-no-such-file-or-directory)
  This is because of the line-formatting difference between Unix and Windows style.
  To fix this temporarily make Git check out files with unix-style file endings on windows use:
   1. `git config --global core.autocrlf false`
   2. Run git clone again
   3. `git config --global core.autocrlf true`
   4. Go to Installation Section again and continue the Setup


* If you encounter further problems using windows. Please try on a x86_64-linux Platform.

### Testing
* If you get Error: No such container: backend 
  Make sure that you are running the the containers with `docker-compose up -d`

### Docker
[To reset docker env](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)

If you have troubles contact me @sdaya001 @Zeph001
