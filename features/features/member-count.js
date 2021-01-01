module.exports = (client) => {
    const channelId = '794347690208657483'
  
    const updateMembers = (guild) => {
      const channel = guild.channels.cache.get(channelId)
      if (channel) {
        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
      }
    }
  
    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))
  
    const guild = client.guilds.cache.get('760614151906656326')
    updateMembers(guild)
  }