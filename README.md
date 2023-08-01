# chatAppCase
Salesy case study

# Fresh project

Your new Fresh project is ready to go. You can follow the Fresh "Getting
Started" guide here: https://fresh.deno.dev/docs/getting-started

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

## Usage MINE
```
deno run --allow-net --allow-read --allow-env --allow-run --watch=static/,routes/ main.ts
```
## docker

```
docker build -t chat-mongodb .
docker run --rm --name mongodb -d -p 27017:27017 chat-mongodb
```

```
mongosh --host localhost --port 27017
```