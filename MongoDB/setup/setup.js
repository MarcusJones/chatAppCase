const { MongoClient } = require('mongodb');
const fs = require('fs');

async function main() {
  // Connection URL
  const url = 'mongodb://localhost:27017';
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log('Connected successfully to MongoDB server');

    // Selecting the database
    const db = client.db('chatApp');

    // Loading the schema from the schema.json file
    const messagesSchema = JSON.parse(fs.readFileSync('schema.json', 'utf8'));

    // Creating the collection with the loaded schema
    const collectionName = 'messages';
    await db.createCollection(collectionName, messagesSchema);
    console.log(`Collection ${collectionName} created successfully`);
  } finally {
    await client.close();
  }
}

main().catch(console.error);