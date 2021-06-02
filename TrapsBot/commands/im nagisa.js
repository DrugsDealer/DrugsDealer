module.exports = {
  name: 'im nagisa',
  desctiption: "show the information about nagisa",
  execute(message, args){
    const pagination = require('discord.js-pagination');
    const { MessageEmbed } = require('discord.js');
    const nagisa1 = new MessageEmbed()
    .setTitle("Nagisa Shiota")
    .setDescription(`Ansatsu Kyoushitsu :male_sign:\nAnimanga roulette · 337 <:kakera:828089158035177482>\nClaim Rank: #435\nLike Rank: #236`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/534600358974980106/geQJ1iq.png")

    const nagisa2 = new MessageEmbed()
    .setTitle("Nagisa Shiota")
    .setDescription(`Ansatsu Kyoushitsu :male_sign:\nAnimanga roulette · 337 <:kakera:828089158035177482>\nClaim Rank: #435\nLike Rank: #236`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/722682781800333342/7fr0v01.png")

    const nagisa3 = new MessageEmbed()
    .setTitle("Nagisa Shiota")
    .setDescription(`Ansatsu Kyoushitsu :male_sign:\nAnimanga roulette · 337 <:kakera:828089158035177482>\nClaim Rank: #435\nLike Rank: #236`)
    .setColor("RANDOM")
    .setImage("https://images-ext-2.discordapp.net/external/8FosRFcNE7vvSz3FV_9gSCoxsrlVtLRiSrZXQSmpaKI/https/media.discordapp.net/attachments/472313197836107780/683853415419478051/3X4Fv0G.png")

    const nagisa4 = new MessageEmbed()
    .setTitle("Nagisa Shiota")
    .setDescription(`Ansatsu Kyoushitsu :male_sign:\nAnimanga roulette · 337 <:kakera:828089158035177482>\nClaim Rank: #435\nLike Rank: #236`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/dKXziWQ.gif")

    const nagisa5 = new MessageEmbed()
    .setTitle("Nagisa Shiota")
    .setDescription(`Ansatsu Kyoushitsu :male_sign:\nAnimanga roulette · 337 <:kakera:828089158035177482>\nClaim Rank: #435\nLike Rank: #236`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/1uj5tkY.gif")

    nagisaPages = [
    nagisa1,
    nagisa2,
    nagisa3,
    nagisa4,
    nagisa5
    ];
    //const emoji = ['828011444964556810', '828011458499444746']
    const emoji = ['⏪', '⏩']

    //const timeout = '40000'
    
    pagination(message, nagisaPages, emoji, /*timeout*/)
  }
}