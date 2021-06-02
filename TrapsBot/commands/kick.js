module.exports = {
  name: 'kick',
  desctiption: "kick a member (need a permission to use that commmand)",
  execute(message, args){
    if(message.member.hasPermission("KICK_MEMBERS")) {
      const mauthor = message.author.username
      let member = message.mentions.members.first()
      if(!member) message.channel.send("wtf Baka, please mention someone!")
      else {
        if (member.kickable){
          member.kick().then(mem => {message.channel.send(`${mauthor} Kicked ${mem.user.username} from the Traps party!!!`)})
          } else{
          message.channel.send("i cant kick him (higher role than me or maybe i dont have the permissions to kick)")
          }
        }
    } else {
      message.reply("wtf bitch you dont have the permission to do that!")
    }
  }
}