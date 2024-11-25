
import {Bot} from "grammy";

const bot = new Bot(process.env.TELEGRAM_TOKEN || "");

const introductionMessage = "test"

const replyWithIntro = (ctx: any) =>
    ctx.reply(introductionMessage);

bot.on("message", replyWithIntro);

bot.start();