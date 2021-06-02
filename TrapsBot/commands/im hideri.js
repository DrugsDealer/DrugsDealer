module.exports = {
  name: 'im hideri',
  desctiption: "send a specific trap from the list",
  execute(message, args){
    const pagination = require('discord.js-pagination');
    const { MessageEmbed } = require('discord.js');
    const hideri1 = new MessageEmbed()
    .setTitle("Hideri Kanzaki")
    .setDescription(`Blend S :male_sign:\nAnimanga roulette · 220 <:kakera:828089158035177482> \nClaim Rank: #821\nLike Rank: #550`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/571165075285606411/1H5dykw.png")

    const hideri2 = new MessageEmbed()
    .setTitle("Hideri Kanzaki")
    .setDescription(`Blend S :male_sign:\nAnimanga roulette · 220 <:kakera:828089158035177482> \nClaim Rank: #821\nLike Rank: #550`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/571165004200673385/4gNizr8.png")

    const hideri3 = new MessageEmbed()
    .setTitle("Hideri Kanzaki")
    .setDescription(`Blend S :male_sign:\nAnimanga roulette · 220 <:kakera:828089158035177482> \nClaim Rank: #821\nLike Rank: #550`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/571164973963804682/QGlvXsm.png")

    const hideri4 = new MessageEmbed()
    .setTitle("Hideri Kanzaki")
    .setDescription(`Blend S :male_sign:\nAnimanga roulette · 220 <:kakera:828089158035177482> \nClaim Rank: #821\nLike Rank: #550`)
    .setColor("RANDOM")
    .setImage("https://i.imgur.com/yeIg35m.gif")

    const hideri5 = new MessageEmbed()
    .setTitle("Hideri Kanzaki")
    .setDescription(`Blend S :male_sign:\nAnimanga roulette · 220 <:kakera:828089158035177482> \nClaim Rank: #821\nLike Rank: #550`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/y3auSjQ.gif")

    hideriPages = [
    hideri1,
    hideri2,
    hideri3,
    hideri4,
    hideri5
    ];
    //const emoji = ['828011444964556810', '828011458499444746']
    const emoji = ['⏪', '⏩']

    //const timeout = '40000'
    
    pagination(message, hideriPages, emoji, /*timeout*/)
  }
}