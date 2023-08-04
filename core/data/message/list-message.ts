import { Collections } from "../collections.js";

import { Message } from "../models/message.js";
import client from "../mongo-client.js";

export default async function listAllMessages() {
  const messages = await client
    .collection<Message>(Collections.MESSAGES)
    .find(
      {},
      {
        sort: { timestamp: -1 }, // Sort by timestamp in descending order to get the most recent
        limit: 10, // 100, // Limit to 100 most recent messages
      }
    )
    .toArray(); // Convert to an array if necessary

  // return messages.reverse(); // Reverse the array to sort the messages in ascending order by timestamp
  return messages;
}