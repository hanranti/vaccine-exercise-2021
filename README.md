# vaccination-exercise

# **New!**

This app is now running in [Heroku](https://vaccine-exercise.herokuapp.com/)

## Installation

To run this application on linux you need to install at least node version v16.6.1, npm version 7.20.3, docker version 20.10.8 and docker-compose version 1.29.2

Node and npm can be foud here

[Node and npm](https://nodejs.org/en/)

and docker/docker-compose installation instructions can be found from these links

[docker](https://docs.docker.com/engine/install/ubuntu/)
[docker-compose](https://docs.docker.com/compose/install/)

You also need to add yourself to the docker group explained in the following

[docker post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/)

Next step is to download the source code with git which should come with most linux distributions. The following command downloads the source to your current directory.

`git clone git@github.com:hanranti/vaccine-exercise-2021.git`

When the download is done move into the scripts folder to give execution permissions for initialization scripts.

`cd vaccine-exercise-2021/scripts`

`chmod u+x *`

Move back into root of the repository to create an .env file

`cd ..`

`cp example.env .env`

The file that was copied is the new .env file but POSTGRES_PASSWORD environment variable should be changed within it to a secure password.

The application is ready to be initialized.

## Initialization and running the app

`npm start` in the repository root sets up everything necessary and starts the app.

Running `npm start` runs the scripts in the scripts folder to install npm packages, build docker containers, convert given data into readable form and feed the data to the postgresql database. As last step it starts the docker containers detaced. To attach run `docker-compose up`

After this step the application can be started and stopped with `docker-compose up` and `docker-compose down`

## Running tests

This application has backend, frontend and e2e tests

To run backend tests run `npm test` in `vaccine-exercise-2021/backend` This initializes the database for tests.

To run frontend tests run `npm test` in `vaccine-exercise-2021/frontend`

To run e2e tests run `npm run test:e2e` in `vaccine-exercise-2021` This initializes the database for tests.

Some of the tests are disabled due to not yet working.