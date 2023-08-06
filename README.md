# chatAppCase
Salesy case study

# Fresh project

## Application Architecture

This application provides a simple yet efficient message board interface, where users can post messages using a randomly assigned or custom username. Built with the [Deno Fresh framework](https://github.com/lucacasonato/fresh), it takes advantage of server-side rendering (SSR) for the main index page, ensuring a swift initial load and improved SEO. The app's main component, `MessageInput`, is architected as an "island", which allows it to rehydrate on the client side, leveraging the speed of SSR while enjoying client-side interactivity. This component facilitates message input, dynamically manages user state through local storage, and auto-focuses on the message field for user convenience. Messages are persisted to a database (not detailed in the provided code), ensuring data persistence across sessions. The application uses the Post-Redirect-Get (PRG) pattern for form submissions, avoiding potential issues with form resubmission on page reloads. This architecture provides a seamless experience for users while maintaining efficient server-client interactions.

# Dev
### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.


### docker

```
docker build -t chat-mongodb .
docker run --rm --name mongodb -d -p 27017:27017 chat-mongodb
```

```
mongosh --host localhost --port 27017
```