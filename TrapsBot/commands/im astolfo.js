module.exports = {
  name: 'im astolfo',
  desctiption: "show the information about astolfo",
  execute(message, args){
    const pagination = require('discord.js-pagination');
    const { MessageEmbed } = require('discord.js');
    const astolfo1 = new MessageEmbed()
    .setTitle("Astolfo")
    .setDescription(`Fate/Apocrypha :male_sign:\nGame & Animanga · 556 <:kakera:828089158035177482>\nClaim Rank: #207\nLike Rank: #54`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/6HzwaLW.png")

    const astolfo2 = new MessageEmbed()
    .setTitle("Astolfo")
    .setDescription(`Fate/Apocrypha :male_sign:\nGame & Animanga · 556 <:kakera:828089158035177482>\nClaim Rank: #207\nLike Rank: #54`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/534592721696981002/mG6zcXF.png")

    const astolfo3 = new MessageEmbed()
    .setTitle("Astolfo")
    .setDescription(`Fate/Apocrypha :male_sign:\nGame & Animanga · 556 <:kakera:828089158035177482>\nClaim Rank: #207\nLike Rank: #54`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/472313197836107780/620425356108759052/UtqmbJw.png")

    const astolfo4 = new MessageEmbed()
    .setTitle("Astolfo")
    .setDescription(`Fate/Apocrypha :male_sign:\nGame & Animanga · 556 <:kakera:828089158035177482>\nClaim Rank: #207\nLike Rank: #54`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/roddRKh.gif")

    const astolfo5 = new MessageEmbed()
    .setTitle("Astolfo")
    .setDescription(`Fate/Apocrypha :male_sign:\nGame & Animanga · 556 <:kakera:828089158035177482>\nClaim Rank: #207\nLike Rank: #54`)
    .setColor("RANDOM")
    .setImage("https://imgur.com/Z9QQerA.gif")

    astolfoPages = [
    astolfo1,
    astolfo2,
    astolfo3,
    astolfo4,
    astolfo5
    ];
    //const emoji = ['828011444964556810', '828011458499444746']
    const emoji = ['⏪', '⏩']

    //const timeout = '40000'
    
    pagination(message, astolfoPages, emoji, /*timeout*/)
  }
}