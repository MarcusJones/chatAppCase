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

    console.log(`Retrieving ${allMessages?.length} messages`)

    return ctx.render({
      allMessages: allMessages ?? [],
    });
  },

  async POST(req, ctx) {
    console.log("POST");
    console.log("req", req, "ctx", ctx)
    const formData = await req.formData();
    // console.log(formData);
    const jsonData = Object.fromEntries(formData);

    // console.log("jsonData", jsonData);

    if (jsonData.user && jsonData.message) {
      await createMessage({
        ...jsonData,
        read: false,
      });
    } else {
      if (!jsonData.user) {
        console.log("No user provided");
      } else if (!jsonData.message) {
        console.log("No message provided");
      }
    }

    const allMessages = await listAllMessages();

    // return ctx.render({
    //   allMessages: allMessages ?? [],
    // });
    // return ctx.redirect('/');
    const headers = new Headers({
      location: new URL(req.url).origin,
    });

    console.log("redirecting to", new URL(req.url).origin);
    return new Response(null, {
      status: 302,
      headers,
    });

  },
};