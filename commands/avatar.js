const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {
  let member = message.mentions.users.first() || message.author
  let embed = new MessageEmbed()
  .setColor("BLUE")
  .setImage(member.displayAvatarURL({size: 4096, dynamic: true}))
  .setTimestamp()
  .setFooter(`Request ${message.author.tag}`)
  message.channel.send(embed)
}