module.exports = {
  name: 'ping',
  desctiption: "this is a ping command!",
  execute(message, args){
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed() //Ver 11.5.1 of Discord.js
    .setTitle("This is a title")
    .setTitle("http://tryitands.ee")
    .setDescription("This is a description")
    .setTimestamp()
    .setFooter("This is a footer")
    .setAuthor("This is the author's name")
    .addField("This is a field", "this is its description")
    .setImage("https://i.imgur.com/63wUBuH.jpg")
    .setThumbnail("https://i.imgur.com/wlEDEPe.png")
    message.channel.send(embed)
  }
}