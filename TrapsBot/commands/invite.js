module.exports = {
  name: 'invite',
  desctiption: "link to invite the bot to your server",
  execute(message, args){
    message.channel.send("https://discord.com/api/oauth2/authorize?client_id=827276597648293939&permissions=8&scope=bot");
  }
}