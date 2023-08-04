import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { tw } from "twind";
import { colors } from "../styles.ts";
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
  // const scrollContainerRef: RefObject<HTMLDivElement> = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom of the list
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  // Call the scrollToBottom function when the component updates
  useEffect(() => {
    scrollToBottom();
  });

  return (
    <div
      ref={scrollContainerRef}
      className="bg-white rounded-lg shadow-lg p-6 m-8 lg:w-2/4 overflow-y-auto"
      // style={{ maxHeight: "calc(20 * 1.5em)" }}
      style={{ maxHeight: "calc(20 * 1.5em)" }}
    >
      {messages.map((message) => (
        <MessageItem value={message} />
      ))}
    </div>
  );
};

export default MessageList;
