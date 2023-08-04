import { Collections } from "../collections.js";

import { Message, NewMessage } from "../models/message.js";
import client from "../mongo-client.js";

export default function createMessage(message: NewMessage) {
  console.log(message)
  // console.log("NEW MESSAGE TO CREATE!")

  const messageWithTimestamp: Message = {
    ...message,
    timestamp: new Date(),
  };

  return client
    .collection<Message>(Collections.MESSAGES)
    .insertOne(messageWithTimestamp);
}
