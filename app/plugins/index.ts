import bot from "../bot";
import { urlFilter } from "./getmsg";

export const onShort = async () => {
  bot.use(urlFilter);
};
