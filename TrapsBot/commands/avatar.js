module.exports = {
  name: 'avatar',
  desctiption: "display the avatar of the command user or the mentioned user",
  execute(message, args){
    const Discord = require('discord.js');
    if(message.mentions.users.size){
    let member=message.mentions.users.first()
    if(member){
      const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username)
      message.channel.send(emb)
    }
    else{
        message.channel.send("Sorry none found with that name")
    }
    }else{
      const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.username)
      message.channel.send(emb)
    }
  }
}