require('module-alias/register')

 const Discord = require('discord.js')
 const client = new Discord.Client()

//const { MongoClient } = require('mongodb')
//const MongoDBProvider = require('commando-provider-mongo')
//const path = require('path')
//const Commando = require('discord.js-commando')

const config = require('@root/config.json')
const loadCommands = require('@root/commands/load-commands')
const commandBase = require('@root/commands/command-base')
const loadFeatures = require('@root/features/load-features')


//const client = new Commando.CommandoClient({
  //owner: '251120969320497152',
  //commandPrefix: config.prefix,
//})

//client.setProvider(
  //MongoClient.connect(config.mongoPath)
    //.then((client) => {
    //  return new MongoDBProvider(client, 'BGN_Admin')
   // })
    //.catch((err) => {
    //  console.error(err)
    //})
//)

client.on('ready', async () => {
  console.log('The client is ready!')

  //client.registry
    //.registerGroups([
      //['misc', 'misc commands'],
      //['moderation', 'moderation commands'],
    //])
    //.registerDefaults()
    //.registerCommandsIn(path.join(__dirname, 'cmds'))

   commandBase.loadPrefixes(client)
   loadCommands(client)
   loadFeatures(client)

})

client.on('ready', async () => {
  client.user.setPresence({
    status: 'online',
    activity: {
        name: 'for new commands',
        type: 'WATCHING',
    }
  })
})


client.login(config.token)