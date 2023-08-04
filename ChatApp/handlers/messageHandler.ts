import { Handlers } from "$fresh/server.ts";
import createMessage from "../core/data/message/create-message.ts";
import listAllMessages from "../core/data/message/list-message.ts";
import { Message } from "../core/data/models/message.ts";

export const messageHandler: Handlers<{
  allMessages: Message[];
}> = {
  async GET(_req, ctx) {
    console.log("GET");
    // logger.info("GET")
    const allMessages = await listAllMessages();

    return ctx.render({
      allMessages: allMessages ?? [],
    });
  },

  async POST(req, ctx) {
    // console.log("POST, req", req, "ctx", ctx)
    const formData = await req.formData();
    console.log(formData);
    const jsonData = Object.fromEntries(formData);

    console.log("jsonData", jsonData);

    if (jsonData.user && jsonData.message) {
      // Handle Message type
      // Example: { user: "Bne", message: "asdf HI " }
      console.log("Processing Message");
      await createMessage({
        ...jsonData,
        read: false,
      });
      // Your code to handle Message goes here
    } else {
      // throw new Error("Unsupported data type");
    }

    const allMessages = await listAllMessages();

    return ctx.render({
      allMessages: allMessages ?? [],
    });
  },
};
