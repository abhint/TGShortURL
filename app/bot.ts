import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(String(process.env.BOT_TOKE));

export default bot;
