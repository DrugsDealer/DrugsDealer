module.exports = {
  name: 'test',
  desctiption: "this is a test command!",
  execute(message, args){
    message.channel.send(message);
  }
}