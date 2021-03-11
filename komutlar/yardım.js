const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  let embed = new dc.MessageEmbed()
  .setTitle("Gift Dispenser")
  .setDescription(`
  
  
  
  **Komutlar**
  **[!çekiliş-yap](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Çekiliş yaparsınız.
  **[!çekiliş-düzenle](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Çekilişi düzenlersiniz.
  **[!çekiliş-yenile](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Çekilişi yenilersiniz.
  **[!çekiliş-bitir](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Çekilişi bitirirsiniz.
  **[!çekiliş-liste](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Çekilişlerinizi listelersiniz.
  **[!shard](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Shardlara bakarsınız.
  **[!istatistik](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Botun istatistiğine bakarsınız.
  `)
  .setImage("https://i.hizliresim.com/WJQ0iT.gif")
  .setColor("GREEN")
  message.channel.send(embed)
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ["help"],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};