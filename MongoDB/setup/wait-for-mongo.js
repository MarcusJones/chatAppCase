const MongoClient = require('mongodb').MongoClient;

async function waitForMongo() {
  const url = 'mongodb://localhost:27017/';
  let connected = false;

  // Try to connect to MongoDB in a loop
  while (!connected) {
    try {
      const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
      connected = true;
      client.close();
    } catch (err) {
      console.log('Waiting for MongoDB...', err);
      // Wait 5 seconds before trying again
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

waitForMongo();