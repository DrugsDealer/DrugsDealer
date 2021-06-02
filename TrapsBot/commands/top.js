module.exports = {
  name: 'top',
  desctiption: "top traps list",
  execute(message, args){
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed() //Ver 11.5.1 of Discord.js
    .setTitle("Top Traps List")
    .setDescription("**#1 - Astolfo** - Fate/Apocrypha\n**#2 - Ruka Urushibara** - Steins;Gate\n**#3 - Nagisa Shiota** - Ansatsu Kyoushitsu\n**#4 - Felix Argyle** - Re:Zero kara Hajimeru Isekai Seikatsu\n**#5 - Pico** - Boku no Pico\n**#6 - Hideri Kanzaki** - Blend S")
    .setFooter("use im (and trap name) to show information about it.")
    message.channel.send(embed)
  }
}