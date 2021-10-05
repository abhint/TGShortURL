import bot from "./app/bot";
import { commands } from "./app/commands";

(async () => {
  await commands();
  await bot
    .launch()
    .then(() => console.log("Hello, World!"))
    .catch((err) => console.log(err));
})();
