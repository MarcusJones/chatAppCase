import { Collections } from "../collections.ts";

import { Message, NewMessage } from "../models/message.ts";
import client from "../mongo-client.ts";

export default function createMessage(message: NewMessage) {
  // console.log("NEW MESSAGE TO CREATE!")

  const messageWithTimestamp: Message = {
    ...message,
    timestamp: new Date(),
  };
  console.log(
    `Entering message into database: ${JSON.stringify(messageWithTimestamp)}`
  );

  return client
    .collection<Message>(Collections.MESSAGES)
    .insertOne(messageWithTimestamp);
}
