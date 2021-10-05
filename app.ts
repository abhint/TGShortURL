import bot from "./app/bot";
import { commands } from "./app/commands";
import { onShort } from "./app/plugins";

(async () => {
  await onShort();
  await commands();
  await bot
    .launch()
    .then(() => console.log("Hello, World!"))
    .catch((err) => console.log(err));
})();
