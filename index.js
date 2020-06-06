const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Reaaaaady!");
});

client.on("message", (message) => {
  console.log(`${message.author.username} : ${message.content}`);

  if (message.content.startsWith(`${prefix}kick`)) {
    message.channel.send(
      `You said "kicked" + ${message.mentions.members.first()}`
    );
  }
});
client.login(token);
