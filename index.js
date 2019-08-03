const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTk4MTY1MzIwMjkyODkyNjky.XUU8Eg.bimxKcAL81GxkSa4xWOThW_-q9M'

const PREFIX = '!';

bot.on('ready', () => {
    console.log('READY B*TCH')
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'help':
            const embed = new Discord.RichEmbed()
                .setTitle('bot commands')
                .addField('Public commands', '`!info` - Get some info about the bot.\n`!social` - The social media of the owner')
                .addField('modderator commands', '`!kick` - Kick a member from the server\n`!ban` - Ban a member from the server')
                .setColor(0x2300FF)
                .setFooter('Version 1.1.8')
            message.channel.sendEmbed(embed);
            break;

    }
})
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'info':
            message.channel.sendMessage('Bot creator : `TRICKSHOTTER71#7937`\nBot version : `Version 1.1.8`\nBot region : :flag_gr:/:flag_al:')
            break;
        case 'social':
            message.channel.sendMessage('`youtube` : ||https://www.youtube.com/channel/UCyGwmahVDVAH5i3CbgJkTaw||\n`instagram` : ||https://www.instagram.com/gkouro._||')
            break;
    }
})
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'kick':
            const user = message.mentions.users.first();

            if (user) {
                const member = member.guild.member(user);

                if (member) {
                    member.kick('You got kicked').then(() => {
                        message.reply(`You kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply('I cant kick this member');
                        console.log(err);
                    });
                } else {
                    message.reply("Error")
                }
            } else {
                message.reply('Please specify a person')
            }



            break;
    }
    
});
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'info':
            message.channel.sendMessage('Bot creator : `TRICKSHOTTER71#7937`\nBot version : `Version 1.1.8`\nBot region : :flag_gr:/:flag_al:')
            break;
        case 'social':
            message.channel.sendMessage('`youtube` : ||https://www.youtube.com/channel/UCyGwmahVDVAH5i3CbgJkTaw||\n`instagram` : ||https://www.instagram.com/gkouro._||')
            break;
    }
})
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ban':
            const user = message.mentions.users.first();

            if (user) {
                const member = member.guild.member(user);

                if (member) {
                    member.ban({ression: 'You got banned'}).then(() =>{
                        message.reply(`You banned ${user.tag}`)
                    });
                } else {
                    message.reply("Error")
                }
            } else {
                message.reply('Please specify a person')
            }



            break;
    } 
    
});



bot.login(token);