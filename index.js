const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const fetch = require("node-fetch");
const client = new Discord.Client();
const colorInfoLink = require("./colorLink");

client.once("ready", () => {
  console.log("Reaaaaady!");
});

client.on("message", async (message) => {
  // console.log(`${message.author.username} : ${message}`);

  if (message.content.startsWith(`${prefix}colors`)) {
    // message.channel.send(`You said: ${message}`);
    console.log(message.content);
    const userInput = message.content.split(" ").splice(1);
    const hexColor = userInput[0];
    console.log(`Hex: ${hexColor}`);

    try {
      console.log(hexColor.length);
      message.reply(await colorInfoLink(hexColor));
    } catch (e) {
      console.log("Error: ", e);
    }
  }
});

client.login(token);

// http://www.thecolorapi.com/id?format=svg&hex=CE181E
