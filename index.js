const fetch = require('node-fetch');
exports.chatbot = async function(message) {
    const args = message.content.toLowerCase().replace(/<@(.*?)>/, '').replace(/[^0-9a-z]/gi, '').split(/ +/).join(" ");
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