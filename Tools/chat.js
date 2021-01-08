const fetch = require('node-fetch');

async function chat(message) {
    if(message.author.bot)return
    message.channel.startTyping();
    const args = message.content.toLowerCase().replace(/<@(.*?)>/, '').replace(/[^0-9a-z]/gi, '').replace(/\s/, '');
    if(!args || args === '') return
    try{
        fetch(`https://pepee.ga/chat?message=${args}`)
            .then(res => res.json())
            .then(async json => {
                return message.reply(json.response)
            });
        return message.channel.stopTyping();
    }catch (err){
        console.error(err);
        return message.channel.stopTyping();
    }
  }
  module.exports = chat;
