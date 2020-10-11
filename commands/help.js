const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {
  let embed = new MessageEmbed()
  .setTitle("Command List", message.author.displayAvatarURL())
  .setFooter(`Request ${message.author.tag}`)
  .setTimestamp()
  .setColor("RANDOM")
  .addField("💻 Developer Command", `\`eval\``)
  .addField("✍️ Utility", `\`ping\`, \`help\`, \`serverinfo\`, \`userinfo\`, \`docs\`, \`npm\`, \`avatar\``)
  .addField("🎉 Giveaway", `\`giveaway\`, \`reroll\``)
  .addField("<a:mcbounce:711611827481739334> Minecraft", `\`mcskin\``)
  message.channel.send(embed)
}