const Discord = require('discord.js');

exports.run = async (client, message, args, params) => {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  var channel = message.guild.channels.find(channel => channel.name === "destek")
      const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» Canlı Destek Sistemi")
  .setDescription("**Birazdan yetkili seninle ilgilenecektir lütfen bekle.**")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Canlı Destek | Talep")
  .addField('**KANAL URL**', asdf.url)
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**Mesaj:**', mesaj)
      channel.send(invite)
};

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['canlıdestek'],
  permLevel: 0
};

exports.help = {
  name: 'canlı-destek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'g!canlı-destek'
};
