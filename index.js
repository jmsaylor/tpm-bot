const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Reaaaaady!");
});

client.on("message", (message) => {
  console.log("content: ", message.content);

  if (message.content.startsWith(`${prefix}kick`)) {
    message.channel.send(`You said "kicked"`);
  }
});
client.login(token);
