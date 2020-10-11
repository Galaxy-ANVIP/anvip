const Discord = require('discord.js');
const client = new Discord.Client();
//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const http = require("http");
const express = require("express");
const app = express();
const bot = client  
const db= require('quick.db')
const { inspect } = require("util")

const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
        embedColor: "RANDOM",
        reaction: "🎉"
    }
});

app.get("/", (request, response) => {
  console.log("Chek you bot");
  response.sendStatus(200);
})
app.listen(process.env.PORT);
setInterval(() => {

http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("ready", async () => {
  console.log(`${client.user.tag} sudah online!`);
  client.user.setActivity(`${bot.guilds.cache.size} Servers v.help`,{
type: "STREAMING",});
});
client.on("message", message => {
//Command di SERVER.JS
const prefix = "v."
if(!message.content.startsWith(prefix)) return;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
let command = cmd;
let commandsFile;
try {
    const commandsFile = require(`./commands/${cmd}.js`);
    commandsFile.run(client, message, args);
  } catch (e) {
    return console.log(`Command \`${cmd}\` Not Found`)
  } 
});
client.login(process.env.BOT_TOKEN);