import { MongoClient } from "mongo";
import appEnv from "../app-env.ts";

const { MONGODB_URI } = appEnv;

const client = new MongoClient();

if (!MONGODB_URI) {
  console.error(`MONGODB Uri missing. Exiting.`);
  Deno.exit(1);
}

try {
  await client.connect(MONGODB_URI);
} catch (error) {
  console.error(`Failed to connect to MongoDB at ${MONGODB_URI}:`, error);
}

let database;

try {
  database = client.database("TODO_APP");
} catch (error) {
  console.error(`Failed to connect to MongoDB at ${MONGODB_URI}:`, error);
}

export default database;
