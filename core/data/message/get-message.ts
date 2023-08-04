import { Collections } from "../collections.ts";

import { ObjectId } from "mongo";
import { Message } from "../models/message.ts";
import client from "../mongo-client.ts";

export default function getMessage(id: string) {
  return client.collection<Message>(Collections.MESSAGES).findOne({
    _id: new ObjectId(id),
  });
}
