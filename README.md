# chatAppCase
Salesy case study

## Application

This application provides a simple yet efficient message board interface, where users can post messages using a randomly assigned or custom username. Built with the [Deno Fresh framework](https://github.com/lucacasonato/fresh), it takes advantage of server-side rendering (SSR) for the main index page, ensuring a swift initial load and improved SEO. The app's main component, `MessageInput`, is architected as an "island", which allows it to rehydrate on the client side, leveraging the speed of SSR while enjoying client-side interactivity. This component facilitates message input, dynamically manages user state through local storage, and auto-focuses on the message field for user convenience. Messages are persisted to a database (not detailed in the provided code), ensuring data persistence across sessions. The application uses the Post-Redirect-Get (PRG) pattern for form submissions, avoiding potential issues with form resubmission on page reloads. This architecture provides a seamless experience for users while maintaining efficient server-client interactions.

Not included:
Real time updates or polling
Extra support for simultaneous messages

## Requirements
Task: Create a small single-page Real-time Chat Application where anonymous
users can send messages to a shared text board without prior registration.
Requirements:
● The application should be containerized using Docker.
● Use a NoSQL database to store the sent messages.
● Use Denoland’s Fresh framework and any other libraries of your choice.
● The application should be able to handle multiple users sending messagessimultaneously.
● Use GitHub for development, with regular commits to show progress.
● Use GitHub Actions to automatically lint the code on push.

Deliverables:
● A working Docker container with the application.
● Source code for the application, hosted on a public GitHub repository with a commit history showing progress.
● A brief documentation on how to run the application and any design decisions made.

# Dev
See Makefile!

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.


### Docker

```
docker build -t chat-mongodb .
docker run --rm --name mongodb -d -p 27017:27017 chat-mongodb
```

```
mongosh --host localhost --port 27017
```

# Prod


