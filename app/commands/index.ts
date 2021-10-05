import { onStart } from "./cmd";
import bot from "../bot";

export const commands = async () => {
  bot.use(onStart);
};
