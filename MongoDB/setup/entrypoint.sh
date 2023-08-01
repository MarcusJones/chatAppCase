#!/bin/bash

# Start MongoDB server with custom configuration and post-process logs
echo "Starting MongoDB server..."
mongod &

# Wait for MongoDB to be ready
echo "Waiting for MongoDB to be ready..."
node wait-for-mongo.js

# Run the setup script
echo "Running setup script..."
node setup.js

# Stop the background MongoDB process
echo "Shutdown the background server"
mongod --shutdown

echo "Starting MongoDB server again ..."
# mongod --bind_ip_all 2>&1 | jq -r '"\(.t) \(.msg)"'
mongod --bind_ip_all

echo "Setup complete."
