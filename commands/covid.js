const { MessageEmbed } = require('discord.js')
const api = require('novelcovid')

exports.run = async (client, message, args) => {
  api.settings({
    baseUrl: 'https://disease.sh'
  })
  if(!args[0]) return message.channel.send("Argument tidak ada, gunakan \`v.covid global atau <negara>\`")
  if(args[0] == 'global'){
    let corona = await api.all()
    let embed = new MessageEmbed()
    .setColor("RED")
    .setTitle("**GLOBAL CASES**")
    .addField("Total Kasus", corona.cases.toLocaleString())
    .addField("Total Kematian", corona.deaths.toLocaleString())
    .addField("Total Pulih", corona.recovered.toLocaleString())
    .addField("Kasus Hari Ini", corona.todayCases.toLocaleString())
    .addField("Kematian Hari Ini", corona.todayDeaths.toLocaleString())
    .addField("Aktif", corona.active.toLocaleString())
    .setFooter(`Request ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
  else {
    api.settings({
      baseUrl: 'https://disease.sh'
    })
    let country = args.join(' ')
    let corona = await api.countries({country: `${country}`})
    let embed = new MessageEmbed()
    .setTitle(`Informasi COVID-19 dari negara **${country}**`)
    .setColor("BLUE")
    .setFooter(`Request ${message.author.tag}`)
    .setTimestamp()
    .addField("Total Kasus", corona.cases.toLocaleString())
    .addField("Total Kematian", corona.deaths.toLocaleString())
    .addField("Total Pulih", corona.recovered.toLocaleString())
    .addField("Kasus Hari Ini", corona.todayCases.toLocaleString())
    .addField("Kematian Hari Ini", corona.todayDeaths.toLocaleString())
    .addField("Aktif", corona.active.toLocaleString())
    message.channel.send(embed)
  }
}