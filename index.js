const fetch = require('node-fetch');
exports.chatbot = async function(message) {
    if(message.author.bot)return
    message.channel.startTyping();
    const args = message.content.toLowerCase().replace(/<@(.*?)>/, '').replace(/[^0-9a-z]/gi, '').replace(/\s/, '');
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