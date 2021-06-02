const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_TOKEN;
const keep_alive = require('./keep_alive.js');
const fs = require("fs");
let kakera = require("./kakera.json");
// First, this must be at the top level of your code, **NOT** in any event!
const talkedRecently = new Set();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command)
}
client.on('ready', () => {
  console.log("the bot is working! (becuase yair is a pro coder)");
  console.log(client.user.username);
  client.user.setPresence({ activity: { name: "Traps" }, status: "online" })
});

client.on('message', message => {
    if(message.content.toLowerCase().startsWith("<@827276597648293939>")) {
      message.channel.send("Bruh")
    }
    if (message.author.bot) return;
    const args = message.content.split(/ +/);
    const command = args.shift().toLowerCase().split(" ").join("");
    
    if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
    }
    if(command === 'k' || command === 'kakera'){
      client.commands.get('kakera').execute(message, args);
    }
    if(command === 'wa'){
      client.commands.get('wa').execute(message, args);
    }
    if(command === 'trap'){
      client.commands.get('trap').execute(message, args);
    }841661633855094825
    if(command === 'top'){
      client.commands.get('top').execute(message, args);
    }
    if(command === 'cob'){
      client.commands.get('cob').execute(message, args);
    }
    if(command === 'avatar'){
      client.commands.get('avatar').execute(message, args);
    }
    if(command === 'invite'){
      client.commands.get('invite').execute(message, args);
    }
    if(command.startsWith("kick")){
      client.commands.get("kick").execute(message, args);
    }
    if(command === 'help'){
      client.commands.get('help').execute(message, args);
    }
    if(command === 'credits'){
      client.commands.get('credits').execute(message, args);
    }
    //waifus
    if(message.content.toLowerCase().startsWith("im hideri")) {
      client.commands.get('im hideri').execute(message, args);
    }
    if(message.content.toLowerCase().startsWith("im astolfo")) {
      client.commands.get('im astolfo').execute(message, args);
    }
    if(message.content.toLowerCase().startsWith("im felix")) {
      client.commands.get('im felix').execute(message, args);
    }
    if(message.content.toLowerCase().startsWith("im pico")) {
      client.commands.get('im pico').execute(message, args);
    }
    if(message.content.toLowerCase().startsWith("im ruka")) {
      client.commands.get('im ruka').execute(message, args);
    }
    if(message.content.toLowerCase().startsWith("im nagisa")) {
      client.commands.get('im nagisa').execute(message, args);
    }
    if(message.content.toLowerCase().startsWith("traps") || message.content.toLowerCase().startsWith("waifus") || message.content.toLowerCase().startsWith("list")) {
      client.commands.get('waifus').execute(message, args);
    }
    if(message.content.toLowerCase().includes("בוקר טוב")) {
      client.commands.get('good morning').execute(message, args);
    }
    if(message.content.toLowerCase().includes("לילה טוב")) {
      client.commands.get('good night').execute(message, args);
      }
});

client.on("guildMemberAdd", member => {
  let WelcomeRole = member.guild.roles.cache.get("827486354392612884");
  member.roles.add(WelcomeRole);
  var mdes = "תהיה בטוח שאתה קורא ב" + 
  "<#828035463800684545>" + "ולוקח רולים ב" + 
  "<#828035478938845244>" + "תהנה בשרת!";
  console.log(member);
  const nmsg = `משתמש חדש בדיוק הצטרף לשרת <@${member.id}>!`;
  let welc = new Discord.MessageEmbed()
    .setTitle("welcome to official TrapsBot Server!")
    .setDescription(mdes)
    .setColor('PINK')
    .setThumbnail("https://i.imgur.com/T2uQZR8.jpg")
    .setImage("https://i.imgur.com/Tqs7sYZ.gif")
    //.setImage("https://media.discordapp.net/attachments/825731913498361916/825745657762414692/divider-1.gif")
    .setFooter("remember, we love traps so always say No Homo to be safe!")
  if(member.guild.id === "827305106399428650") {
    //client.channels.cache.get("").send(nmsg)
    client.channels.cache.get("828058626357854208").send(nmsg, {
 embed: welc,});
  }
})

client.on("message", message => {
  if(message.channel.type == "text" && message.channel.name.toLowerCase() == "suggestion"){
    message.react("👍");
    message.react("👎");
    }
})

/*client.on('message', function(message) {
    // Now, you can use the message variable inside
    if(message.content.toLowerCase().startsWith("luck message")) { 
        var interval = setInterval (function () {
            message.channel.send("test")
            .catch(console.error); // add error handling here
        }, 1 * 10000); 
    }
});*/

client.on ('message', async message => {
  if (message.content.toLowerCase() === "ta") {
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
    
    let lastWaifu;
    function getRandWaifu() {
      pages = [
      page1,
      page2,
      page3,
      page4,
      page5
      ];
      const waifu = pages[Math.floor(Math.random() * pages.length)];
      if (waifu === lastWaifu) {
        return getRandWaifu(); 
      }
      return waifu;
    }
    const wrandom = getRandWaifu();
    const msg = await message.channel.send(wrandom);
    await msg.react("🥵").catch( error => {
      if(message.member.hasPermission("ADD_REACTIONS")){
        message.channel.send("i dont have the permission to do that fucking idiot!!!")
      } else{
        message.channel.send("i dont have the permission to do that fucking idiot!!!")
      }
    })
    msg.awaitReactions((reaction, user) => user.id == user.id && (reaction.emoji.name == '🥵'),
            { max: 1, time: 30000 }).then(collected => {
                    const reaction = collected.first();
                    if (collected.first().emoji.name == '🥵') {
                            const member = reaction.users.cache.find((user) => !user.bot);
                            message.channel.send(`${member}, יבן זונה אני עוד עובד על הדאטה של הקליימ חכה בסבלנות`)
                    }
                    else
                            message.reply('למה שתנסה אימוגי אחר ימפגר מופיע לך האימוגי');
            }).catch(() => {
            });
  }
});

client.on ('message', async message => {
  var interval = setInterval (async function () {
            if(message.member.hasPermission("ADMINSTRATOR")) {
              if(message.content.toLowerCase().startsWith("luck message")) {
                const { MessageEmbed } = require('discord.js');
                const menu = new MessageEmbed()
                .setTitle("משפט לפסיכופת!")
                .setDescription("מי חסר החיים הזריז ביותר שילחץ על הריאקשן ראשון?\nלחץ מהר וקבל משפט/עובדה עליך!\n\n(30 שניות לפני שתעלם ההודעה!)")
                .setColor("RANDOM")
                .setFooter("משחק זריזות, כל 20 דקות הודעה זו נשלחת שוב!")
                
                //question list:
                const question1 = "אתה גיי"
                const question2 = "הזין שלך כל כך קטן שכשאתה רץ לקיר עם זקפה האף שלך פוגע בקיר קודם"
                const question3 = "אתה כל כך הומו שכששואלים אותך מה הצבע האהוב עליך אתה אומר הקשת"
                const question4 = "אורגזמה של חזיר נמשכת 30 דקות"
                const question5 = "בדיקה מספר 5"
                const question6 = "בדיקה מספר 6"
                const question7 = "בדיקה מספר 7"
                const question8 = "בדיקה מספר 8"
                const question9 = "בדיקה מספר 9"
                const question10 = "בדיקה מספר 10"

                let lastLuck;
                function getRandQuestion() {
                  questions = [
                  question1,
                  question2,
                  question3,
                  question4,
                  question5,
                  question6,
                  question7,
                  question8,
                  question9,
                  question10
                  ];
                  const luck = questions[Math.floor(Math.random() * questions.length)];
                  if (luck === lastLuck) {
                    return getRandNumber(); 
                  }
                  return luck;
                }
                const qrandom = getRandQuestion();
                const lmsg = await message.channel.send(menu);
                await lmsg.react("🥵").catch( error => {
                  if(message.member.hasPermission("ADD_REACTIONS")){
                    message.channel.send("i dont have the permission to react this message fucking idiot!!!")
                  } else{
                    message.channel.send("i dont have the permission to react this message fucking idiot!!!")
                  }
                })
                lmsg.awaitReactions((reaction, user) => user.id == user.id && (reaction.emoji.name == '🥵'),
                        { max: 1, time: 30000 }).then(collected => {
                                const reaction = collected.first();
                                if (collected.first().emoji.name == '🥵') {
                                        const member = reaction.users.cache.find((user) => !user.bot);
                                        message.channel.send(`${member}, ${qrandom}`)
                                }
                                else
                                        message.reply('למה שתנסה אימוגי אחר ימפגר מופיע לך האימוגי')
                        }).catch(() => {
                        });
              }
            }
            else{
              message.channel.send("שתוק יחסר גישות מסריח")
            }
        }, 1 * 1200000);
});

client.on ('message', async message => {
  if(message.member.roles.cache.find(r => r.name === "Nitro Boosters")){
    if(message.content.toLowerCase().startsWith("spawn pack")) {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send(`\`wait 1 min before use it again\` ${message.author}`);
    } else {

          const { MessageEmbed } = require('discord.js');
          const menu = new MessageEmbed()
          .setTitle("משפט לפסיכופת!")
          .setDescription("מי חסר החיים הזריז ביותר שילחץ על הריאקשן ראשון?\nלחץ מהר וקבל משפט/עובדה עליך!\n\n(30 שניות לפני שתעלם ההודעה!)")
          .setColor("RANDOM")
          .setFooter("משחק זריזות, כל 20 דקות הודעה זו נשלחת שוב!")
          
          //question list:
          const question1 = "אתה גיי"
          const question2 = "הזין שלך כל כך קטן שכשאתה רץ לקיר עם זקפה האף שלך פוגע בקיר קודם"
          const question3 = "אתה כל כך הומו שכששואלים אותך מה הצבע האהוב עליך אתה אומר הקשת"
          const question4 = "בדיקה מספר 4"
          const question5 = "בדיקה מספר 5"
          const question6 = "בדיקה מספר 6"
          const question7 = "בדיקה מספר 7"
          const question8 = "בדיקה מספר 8"
          const question9 = "בדיקה מספר 9"
          const question10 = "בדיקה מספר 10"

          let lastLuck;
          function getRandQuestion() {
            questions = [
            question1,
            question2,
            question3,
            question4,
            question5,
            question6,
            question7,
            question8,
            question9,
            question10
            ];
            const luck = questions[Math.floor(Math.random() * questions.length)];
            if (luck === lastLuck) {
              return getRandNumber(); 
            }
            return luck;
          }
          const qrandom = getRandQuestion();
          const lmsg = await message.channel.send(menu);
          await lmsg.react("🥵").catch( error => {
            if(message.member.hasPermission("ADD_REACTIONS")){
              message.channel.send("i dont have the permission to react this message fucking idiot!!!")
            } else{
              message.channel.send("i dont have the permission to react this message fucking idiot!!!")
            }
          })
          lmsg.awaitReactions((reaction, user) => user.id == user.id && (reaction.emoji.name == '🥵'),
                  { max: 1, time: 30000 }).then(collected => {
                          const reaction = collected.first();
                          if (collected.first().emoji.name == '🥵') {
                                  const member = reaction.users.cache.find((user) => !user.bot);
                                  message.channel.send(`${member}, ${qrandom}`)
                          }
                          else
                                  message.reply('למה שתנסה אימוגי אחר ימפגר מופיע לך האימוגי');
                  }).catch(() => {
                    menu.delete()
                    message.channel.send("יחסרי חברים מפגרים הזמן עבר ולא לחצתם על הריאקשן!")
                  });

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        },60000);
      }
    }
  }
});

client.on ('message', async message => {
  if(message.content.toLowerCase().startsWith("dk")) {
    if (message.author.bot) return;
    if (talkedRecently.has(message.author.id)) {
          message.channel.send(`\`wait 1 day before use it again!\` ${message.author}`);
  } else {
    if(!kakera[message.author.id]){
    kakera[message.author.id] = {
      kakera: 0
    };
  }

  let kakeraAmt = Math.floor(Math.random() * 500) + 1;
  console.log(`${kakeraAmt}`);
  //add the kakera
  kakera[message.author.id] = {
    kakera: kakera[message.author.id].kakera + kakeraAmt
  };
  fs.writeFile("./kakera.json", JSON.stringify(kakera), (err) =>{
    if (err) console.log(err)
  });
  let kakeraEmbed = new Discord.MessageEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .setDescription(`${kakeraAmt}<:kakera:828089158035177482> kakera added!`);

  message.channel.send(kakeraEmbed).then(msg => {msg.delete(5000)});


      // Adds the user to the set so that they can't talk for a minute
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      },86400000);
    }
  }
});

client.login(token);