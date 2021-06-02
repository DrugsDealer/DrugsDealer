module.exports = {
  name: 'im ruka',
  desctiption: "show the information about ruka",
  execute(message, args){
    const pagination = require('discord.js-pagination');
    const { MessageEmbed } = require('discord.js');
    const ruka1 = new MessageEmbed()
    .setTitle("Ruka Urushibara")
    .setDescription(`Steins;Gate :male_sign: :female_sign:\nAnimanga roulette · 208 <:kakera:828089158035177482>\nClaim Rank: #300\nLike Rank: #918`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/747613295283929128/gehEc2l.png")

    const ruka2 = new MessageEmbed()
    .setTitle("Ruka Urushibara")
    .setDescription(`Steins;Gate :male_sign: :female_sign:\nAnimanga roulette · 208 <:kakera:828089158035177482>\nClaim Rank: #300\nLike Rank: #918`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/747613330608226366/hDe8qZo.png")

    const ruka3 = new MessageEmbed()
    .setTitle("Ruka Urushibara")
    .setDescription(`Steins;Gate :male_sign: :female_sign:\nAnimanga roulette · 208 <:kakera:828089158035177482>\nClaim Rank: #300\nLike Rank: #918`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/548373305267060736/xA0odzq.png")

    const ruka4 = new MessageEmbed()
    .setTitle("Ruka Urushibara")
    .setDescription(`Steins;Gate :male_sign: :female_sign:\nAnimanga roulette · 208 <:kakera:828089158035177482>\nClaim Rank: #300\nLike Rank: #918`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/553821165790167050/ye49H5I.png")

    const ruka5 = new MessageEmbed()
    .setTitle("Ruka Urushibara")
    .setDescription(`Steins;Gate :male_sign: :female_sign:\nAnimanga roulette · 208 <:kakera:828089158035177482>\nClaim Rank: #300\nLike Rank: #918`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/6B1t8WS.gif")

    rukaPages = [
    ruka1,
    ruka2,
    ruka3,
    ruka4,
    ruka5
    ];
    //const emoji = ['828011444964556810', '828011458499444746']
    const emoji = ['⏪', '⏩']
    
    pagination(message, rukaPages, emoji)
  }
}