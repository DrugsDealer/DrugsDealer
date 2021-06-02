module.exports = {
  name: 'trap',
  desctiption: "send a trap from anime",
  execute(message, args){
    const pagination = require('discord.js-pagination');
    const { MessageEmbed } = require('discord.js');
    const page1 = new MessageEmbed()
    .setTitle("Hideri Kanzaki")
    .setDescription(`Blend S :male_sign:\nAnimanga roulette · 220 <:kakera:828089158035177482> \nClaim Rank: #821\nLike Rank: #550`)
    .setColor("RANDOM")
    .setImage("https://i.imgur.com/yeIg35m.gif")

    const page2 = new MessageEmbed()
    .setTitle("Astolfo")
    .setDescription(`Fate/Apocrypha :male_sign:\nGame & Animanga · 556 <:kakera:828089158035177482>\nClaim Rank: #207\nLike Rank: #54`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/Z9QQerA.gif")

    const page3 = new MessageEmbed()
    .setTitle("Felix Argyle")
    .setDescription(`Re:Zero kara Hajimeru Isekai Seikatsu :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #678\nLike Rank: #269`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/XVX3Kv3.gif")

    const page4 = new MessageEmbed()
    .setTitle("Pico")
    .setDescription(`Boku no Pico :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #768\nLike Rank: #180`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/59gecdz.gif")

    const page5 = new MessageEmbed()
    .setTitle("Nagisa Shiota")
    .setDescription(`Ansatsu Kyoushitsu :male_sign:\nAnimanga roulette · 337 <:kakera:828089158035177482>\nClaim Rank: #435\nLike Rank: #236`)
    .setColor("RANDOM")
    .setImage("https://images-ext-2.discordapp.net/external/8FosRFcNE7vvSz3FV_9gSCoxsrlVtLRiSrZXQSmpaKI/https/media.discordapp.net/attachments/472313197836107780/683853415419478051/3X4Fv0G.png")

    const page6 = new MessageEmbed()
    .setTitle("Ruka Urushibara")
    .setDescription(`Steins;Gate :male_sign: :female_sign:\nAnimanga roulette · 208 <:kakera:828089158035177482>\nClaim Rank: #300\nLike Rank: #918`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/6B1t8WS.gif")

    pages = [
    page1,
    page2,
    page3,
    page4,
    page5,
    page6
    ];
    //const emoji = ['828011444964556810', '828011458499444746']
    const emoji = ['⏪', '⏩']

    //const timeout = '40000'
    
    pagination(message, pages, emoji, /*timeout*/)
  }
}