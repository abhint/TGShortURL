import { Composer } from "telegraf";
import shortME from "../helpers/create";
export const urlFilter = Composer.on("text", async (msg) => {
  const text = msg.message.text;
  const regexp =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  if (text.match(regexp) === null) {
    console.log("Hi");
  } else {
    const url = await shortME(msg.message.text);
    await msg.telegram.sendMessage(msg.chat.id, `${url}`);
  }
});
