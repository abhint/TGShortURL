import bot from "./app/bot";

(async () => {
  await bot
    .launch()
    .then(() => console.log("Hello, World!"))
    .catch((err) => console.log(err));
})();
