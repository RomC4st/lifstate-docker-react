This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`

### `docker build -t sample:dev .` 

Build docker image

### `docker run -it --rm --network="host" -v ${PWD}:/app -v /app/node_modules  -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev`

Mounts the code into the container “/app” and run docker image to localhost
# lifstate-docker-react
