module.exports = {
  name: 'kakera',
  desctiption: "print the kakera of a user!",
  execute(message, args){
    let Discord = require("discord.js");
    let kakera = require("../kakera.json");
    if(!kakera[message.author.id]){
      kakera[message.author.id] = {
        kakera: 0
      };
    }
    let uKakera = kakera[message.author.id].kakera;

    let kakeraEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("#00FF00")
    .setDescription(`you got ${uKakera}<:kakera:828089158035177482> kakera!`);

    message.channel.send(kakeraEmbed).then(msg => {msg.delete(5000)});
  }
}