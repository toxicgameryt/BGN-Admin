const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'userinfo',
  minArgs: 0,
  callback: async (message, arguments, text) => {

  
    const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)

    console.log(member)

    const embed = new MessageEmbed()
      .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
      .addFields(
        {
          name: 'User tag',
          value: user.tag,
        },
        {
          name: 'Is bot',
          value: user.bot,
        },
        {
          name: 'Nickname',
          value: member.nickname || 'None',
        },
        {
          name: 'Joined Server',
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: 'Joined Discord',
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        {
          name: 'Roles',
          value: member.roles.cache.size - 1,
        }
      )
      .setFooter('BGN Admin', 'https://cdn.discordapp.com/attachments/783179149317636147/784948657254170624/Logo_BreakFast_Galaxy.jpg')
      .setColor('#0099ff')
      .setTimestamp(message.createdAt);
      

    channel.send(embed)
  }
}