# Use the official MongoDB image
FROM mongo:6.0

# Create app directory
WORKDIR /usr/src/app

# Install Node.js
RUN apt-get update && apt-get install -y curl jq && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Copy the setup scripts and schema JSON to the container
COPY setup/ ./

# Install the MongoDB driver for Node.js
RUN npm init -y && npm install mongodb

# Make the entrypoint script executable
RUN chmod +x entrypoint.sh

# Expose the MongoDB port
EXPOSE 27017

# Use the custom entry point
ENTRYPOINT ["./entrypoint.sh"]
