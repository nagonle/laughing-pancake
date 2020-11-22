# laughing-pancake (front)

## Dependencies
For this project to work, you have to get running all repos related:
* [laughing-pancake](https://github.com/ng-nicolas/laughing-pancake) : frontend (you're here)
* [burning-furnace](https://github.com/ng-nicolas/burning-furnace) : backend
* [products-db](https://github.com/walmartdigital/products-db) : database

In each repo you will have instructions on how to get started.

## Installation

To get all working (build and run):
```sh
$ make start
```

To just build:
```sh
$ make build
```

To just run:
```sh
$ make run
```

After getting all running go to [http://localhost:3010](http://localhost:3010).

If you want to modify the API URL go to **local.Dockerfile** and change the env variable **REACT_APP_API_HOST**.


## Run without container
```sh
$ npm i
$ npm run dev
```
It's included **develop.env** as an example of a working env file.