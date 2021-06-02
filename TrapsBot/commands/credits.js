module.exports = {
  name: 'credits',
  desctiption: "show the details about the bot owner",
  execute(message, args){
    const Discord = require('discord.js');
    let embed = new Discord.MessageEmbed()
      .setTitle("~Credits~")
      .setDescription("This top tier bot created by Yair (discord: yair#8903) in .js\n\nThe bot is hosted by yair 24/7.")
      .setColor("RANDOM")
      .setFooter("traps are the best (no homo)")
    message.channel.send(embed)
  }
}