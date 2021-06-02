module.exports = {
  name: 'help',
  desctiption: "show the bot commands",
  execute(message, args){
    const Discord = require('discord.js');
    let embed = new Discord.MessageEmbed()
      .setTitle("Bot Commands")
      .setDescription("**help** - show the bot commands\n\n**credits** - show the details about the bot owners\n\n**invite** - link to invite the bot to your server\n\n**trap** - traps from anime\n\n**ta** - like ma\\wa\\ha of the mudae bot, but just traps.\n\n**im (trap name)** - like the im command of the mudae bot it shows the information about the character you chose\n\n**waifus/traps/list** - shows the traps list\n\n**top** - show the top traps list\n\n**cob** - cat girls or bunny girls, what is better? (this command idea wan't mine...)\n\n**avatar** - shows the avatar of the command user or the mentioned user\n\n**לילה טוב** - your'e a weeb that means you dont have any friends, but that not a problem! the bot gonna say good night to you!\n\n**בוקר טוב** - your'e a weeb that means you dont have any friends, but that not a problem! the bot gonna say good morning to you!")
      .addFields(
        {name: 'Commands for Admin', value: '**kick** - kick a member (need a permission to use that commmand)\n\n**luck message** - fun event, every 20 minutes it auto send a message with react, and a funny message to the first member who reacted it.'},
      )
      .setColor('#FC46AA')
      .setFooter("no homo")
    message.channel.send(embed)
  }
}