import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { useEffect, useState } from "preact/hooks";

import { Message } from "../core/data/models/message.ts";
import { messageHandler } from "../handlers/messageHandler.ts";
import MessageList from "../components/MessageList.tsx";
import MessageInput from "../islands/MessageInput.tsx";

log.info("Rendering MainPage");

export const handler = messageHandler;

type MainPageProps = {
  allMessages: Message[];
};

export default function MainPage(props: PageProps<MainPageProps>) {
  console.log("Rendering MainPage");
  const { data } = props;
  const { allMessages } = data;

  const [username, setUsername] = useState(
    localStorage.getItem("username") || "",
  );
  // useEffect(() => {
  //   localStorage.setItem("username", username);
  // }, [username]);

  const handleFormSubmit = (e: React.FormEvent) => {
    console.log("Form submitted!");
    e.preventDefault();
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 via-teal-200 to-teal-100 font-sans">
      <MessageInput
        username={username}
        setUsername={setUsername}
        onSubmit={handleFormSubmit}
      />
      {/* {" "} */}
      <MessageList messages={allMessages} />
    </div>
  );
}
