module.exports = {
  name: 'im felix',
  desctiption: "show the information about felix",
  execute(message, args){
    const pagination = require('discord.js-pagination');
    const { MessageEmbed } = require('discord.js');
    const felix1 = new MessageEmbed()
    .setTitle("Felix Argyle")
    .setDescription(`Re:Zero kara Hajimeru Isekai Seikatsu :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #678\nLike Rank: #269`)
    .setColor("RANDOM")
    .setImage("https://images-ext-2.discordapp.net/external/dihTgVfcIgQnLeE6QIdiFRRTrxcFoYHeG3wsarpA5Ys/https/imgur.com/N765oKA.png")

    const felix2 = new MessageEmbed()
    .setTitle("Felix Argyle")
    .setDescription(`Re:Zero kara Hajimeru Isekai Seikatsu :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #678\nLike Rank: #269`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/yvM2I3w.png")

    const felix3 = new MessageEmbed()
    .setTitle("Felix Argyle")
    .setDescription(`Re:Zero kara Hajimeru Isekai Seikatsu :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #678\nLike Rank: #269`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/MiKRMMi.png")

    const felix4 = new MessageEmbed()
    .setTitle("Felix Argyle")
    .setDescription(`Re:Zero kara Hajimeru Isekai Seikatsu :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #678\nLike Rank: #269`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/xS604zj.png")

    const felix5 = new MessageEmbed()
    .setTitle("Felix Argyle")
    .setDescription(`Re:Zero kara Hajimeru Isekai Seikatsu :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #678\nLike Rank: #269`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/XVX3Kv3.gif")

    felixPages = [
    felix1,
    felix2,
    felix3,
    felix4,
    felix5
    ];
    //const emoji = ['828011444964556810', '828011458499444746']
    const emoji = ['⏪', '⏩']

    //const timeout = '40000'
    
    pagination(message, felixPages, emoji, /*timeout*/)
  }
}