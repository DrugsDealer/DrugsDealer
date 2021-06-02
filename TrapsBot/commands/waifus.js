module.exports = {
  name: 'waifus',
  desctiption: "waifus list command",
  execute(message, args){
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed() //Ver 11.5.1 of Discord.js
    .setTitle("Traps List")
    .setDescription("Hideri Kanzaki - Blend S\nAstolfo - Fate/Apocrypha\nRuka Urushibara - Steins;Gate\nFelix Argyle - Re:Zero kara Hajimeru Isekai Seikatsu\nPico - Boku no Pico\nNagisa Shiota - Ansatsu Kyoushitsu")
    .setFooter("use im (and trap name) to show information about it.")
    message.channel.send(embed)
  }
}