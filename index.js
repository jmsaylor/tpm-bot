const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const fetch = require("node-fetch");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Reaaaaady!");
});

client.on("message", (message) => {
  // console.log(`${message.author.username} : ${message}`);

  if (message.content.startsWith(`${prefix}colors`)) {
    // message.channel.send(`You said: ${message}`);

    const testing = async () => {
      console.log("testing");
      const response = await fetch(
        "http://www.thecolorapi.com/id?format=svg&hex=CE181E"
      );
      const body = await response.text();

      message.channel.send(body);
    };
    testing();
  }
});

client.login(token);
