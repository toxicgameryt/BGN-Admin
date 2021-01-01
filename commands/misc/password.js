const password = 'test'
const Discord = require('discord.js')
module.exports = {
    commands: [],
    expectedArgs: '<Password>',
    permissionError: 'You need admin to run this command!',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments , text) => {
        var collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 })

        message.channel.send("Please enter the password")
        
        collector.on('collect', message => {
             if(password == message.content){
                message.reply('Password Accepted!')
                return
             }
             if(password !== message.content) {
                 message.reply('Password Denied')
                 return
             }
            });
    },
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
}