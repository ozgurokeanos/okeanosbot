const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence Komutları:**", `!8ball  = Sihirli 8ball sorularınızı cevaplar. \n!aşkölçer = İki kullanıcı sarasındaki aşkı ölçer. \n!koş = Koşarsınız. \n!stresçarkı = Stres çarkı çevirirsiniz. \n!dalgageç = Başkaları ile dalga geçer. \n!söv = Birine söver. \n!kafasınasık = Birisinin kafasına sıkarsınız. \n!espri = Espri yapar. \n!herkesebendençay = Herkese çay verir. \n!kasaaç = CS:GO kasa açma simülasyonu. \n!kaçcm = Kaç santim olduğunu gösterir. \n!nahçek = İstediğiniz kişiye hareket çekersiniz. \n!yazı-tura = Yazı Tura oynamanıza yarar. \n!çayiç = Çay içer. \n!öp = İstediğiniz kişiyi öpersiniz. \n!sarıl = İstediğiniz Kişiye Sarılırsınız. \n!kralol = Kral olursunuz.`)
  .addField("**Kullanıcı Komutları:**", `!atatürk = Atamızın resimlerini gösterir. \n!avatar = Avatarınızı gösterir. \n!davet-sıralaması = Sunucunuza en çok kullanıcı getirenleri sıralar. \n!canlıdestek = Canlı Destek talebi oluşturur. \n!emojiyazı = Emoji şeklinde yazı yazarsınız. \n!spotify = Spotify'dan müzik dinleyen birinin dinlediği müziğin bilgilerini söyler. \n!kullanıcıbilgim = Sizin hakkınızda bilgi verir. \n!google = Googleda bir kelime aratırsınız. \n!sunucuistatistik = Bulunduğunuz sunucu hakkında bilgi verir. \n!korona = Güncel vaka sayılarını gösterir. \n!servericon = Sunucunun ikonunu gösterir. \n!öneri = Öneride bulunursunuz. \n!şikayet = Şikayette bulunursunuz.`)
  .addField("**Sunucu Yetkilisi Komutları**", `!ban = İstediğiniz Kişiyi Sunucudan Banlar. \n!kick  = İstediğiniz Kişiyi Sunucudan Atar. \n!uyarı  = İstediğiniz Kişiyi Uyarır \n!unban = İstediğiniz Kişinin Yasağını Açar. \n!temizle = Mesajları silersiniz 99 dan fazla olmaz. \n!oylama = Bot oylama yapar. \n!çekiliş = Çekiliş yapar. \n!reklam-taraması = Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar. \n!duyuruyap = Güzel bir duyuru görünümü sağlar.`)
  .addField("**Botun Ana Komutları**", "!ping = BOT Gecikme Süresini Söyler. \n!davet = BOT Davet Linkini Atar. \n!istatistik = BOT istatistiklerini atar. \n!destek = Destek sunucusunu atar \n!yapımcım = Botun yapımcısını gösterir. \n!yaz = İstediğiniz yazıyı bota yazdırır.")
  .setFooter('Beni davet etmek veya sunucumuza gelmek için !davet')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};