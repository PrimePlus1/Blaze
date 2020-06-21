const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const prefix = config.prefix;
const colours = require('./colours.json');

bot.on('ready', () =>{
   console.log(`Logged in as ${bot.user.username}`); 
   bot.user.setActivity('.hilfe', ({type: "STREAMING", url: "https://www.twitch.tv/primeplusontwitch"}));
});

bot.on('message', (msg) =>{
    if(msg.content == `${prefix}wolfi`){
    msg.channel.send('Wolfi ist ein netter und süßer Wolf!');
    }

    if(msg.content == `${prefix}yazurie`){
        msg.channel.send('Yazurie ist ein Böser aber süßer Wolf!');
        }

    if(msg.content == `${prefix}hilfe`){
    const helpEmbed = new MessageEmbed()
    .setTitle('**Command Hilfe**')
    .setDescription('Hier sind alle Commands! \n \n .hilfe » Listet alle Commands auf! \n \n .socialmedia » Zeit unsere SocialMedia Plattformen an! ')
    .setColor(colours.blue)
    .setAuthor("RoyalStudios")
    .setFooter("")
    msg.channel.send(helpEmbed);

    }    

    if(msg.content == `${prefix}socialmedia`){
        const helpEmbed = new MessageEmbed()
        .setTitle('**Unser SocialMedia**')
        .setDescription('Wir sind auf diesen Plattformen vertretten! \n \n YouTube » \n \n Twitch » ')
        .setColor(colours.blue)
        .setAuthor("RoyalStudios")
        .setFooter("")
        msg.channel.send(helpEmbed);
    
        }    
    
    if(msg.content == `${prefix}bann`){
        msg.channel.send(':BANN: ');
        
       }

});

bot.login(token);