import { ObjectId } from "mongo";

export interface Message {
  _id: ObjectId;
  user: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export type NewMessage = Omit<Message, "_id">;

export function isNewMessage(item: any): item is NewMessage {
  return Boolean(item?.name) && !item._id;
}
