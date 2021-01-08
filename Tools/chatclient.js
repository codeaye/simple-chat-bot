async function chatclient(token, chatchannels, activity) {
  if (!token) return console.error("Please give a token.");
  const activityforbot = activity || undefined;
  const chatchannelsbot = chatchannels || ["bot-chat", "botchat"];

  const Discord = require("discord.js");
  const client = new Discord.Client();
  const chatbot = require("./chatbot.js");

  client.on("ready", () => {
      console.log("ChatBot is ready.");
      if(activity){
        client.user.setActivity(activity[0], activity[1]);
      }
    });

  client.on("message", (msg) => {
    if (!chatchannelsbot.includes(msg.channel.name.toLowerCase())) return;
    chatbot(msg);
  });

  (async () => {
    await client.login(token);
  })();
}

module.exports = chatclient;
