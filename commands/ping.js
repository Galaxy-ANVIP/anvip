const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {
  let pinging = await message.channel.send("Getting Info")
  let now = Date.now()
  let embed = new MessageEmbed()
  .setColor("GREEN")
  .setColor("BLUE")
  .setTitle("Pong")
  .addField("Roundtrip took", pinging.createdTimestamp - message.createdTimestamp)
  .addField("Latency", Math.round(Date.now()-now))
  .addField("API", Math.round(client.ws.ping))
  setTimeout(function() {
    pinging.edit("Success getting info", embed)
  }, 5000)
}