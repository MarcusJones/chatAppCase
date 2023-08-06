import { h } from "preact";
import MessageItem from "./MessageItem.tsx";

const React = { createElement: h };
export interface Message {
  _id: string;
  user: string;
  message: string;
  timestamp: string;
  read: boolean;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: h.FunctionComponent<MessageListProps> = ({ messages }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 m-8 lg:w-2/4 overflow-y-auto"
      style={{ maxHeight: "calc(20 * 1.5em)" }}
    >
      {messages.map((message) => (
        <MessageItem value={message} />
      ))}
    </div>
  );
};

export default MessageList;
