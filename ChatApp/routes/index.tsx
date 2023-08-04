/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";
// import * as log from "https://deno.land/std/log/mod.ts";
import { useState, useEffect } from "preact/hooks";

import { Message } from "../core/data/models/message.ts";
import { messageHandler } from "../handlers/messageHandler.ts"; // Import the handler from the new file
import MessageList from "../components/MessageList.tsx";
import MessageInput from "../components/MessageInput.tsx";

export const handler = messageHandler;

type MessagesProps = {
  allMessages: Message[];
};

export default function Messages(props: PageProps<MessagesProps>) {
  const { data } = props;
  const { allMessages } = data;

  // State for the username, so that it stays after sending the message
  // const [username, setUsername] = useState("");
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [message, setMessage] = useState("");
  // Whenever username changes, update local storage

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <div
      className={tw`h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 via-teal-200 to-teal-100 font-sans`}
    >
      <MessageInput
        username={username}
        setUsername={setUsername}
        message={message}
        setMessage={setMessage}
      />{" "}
      <MessageList messages={allMessages} />
    </div>
  );
}
