module.exports = {
  name: 'im pico',
  desctiption: "show the information about pico",
  execute(message, args){
    const pagination = require('discord.js-pagination');
    const { MessageEmbed } = require('discord.js');
    const pico1 = new MessageEmbed()
    .setTitle("Pico")
    .setDescription(`Boku no Pico :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #768\nLike Rank: #180`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/IYzQUhn.png")

    const pico2 = new MessageEmbed()
    .setTitle("Pico")
    .setDescription(`Boku no Pico :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #768\nLike Rank: #180`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/546539942008979456/Jr0HFUJ.png")

    const pico3 = new MessageEmbed()
    .setTitle("Pico")
    .setDescription(`Boku no Pico :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #768\nLike Rank: #180`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/s0dV4oC.png")

    const pico4 = new MessageEmbed()
    .setTitle("Pico")
    .setDescription(`Boku no Pico :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #768\nLike Rank: #180`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/534608681468297226/uyuZgaz.png")

    const pico5 = new MessageEmbed()
    .setTitle("Pico")
    .setDescription(`Boku no Pico :male_sign:\nAnimanga roulette · 275 <:kakera:828089158035177482>\nClaim Rank: #768\nLike Rank: #180`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/59gecdz.gif")

    picoPages = [
    pico1,
    pico2,
    pico3,
    pico4,
    pico5
    ];
    //const emoji = ['828011444964556810', '828011458499444746']
    const emoji = ['⏪', '⏩']

    //const timeout = '40000'
    
    pagination(message, picoPages, emoji, /*timeout*/)
  }
}