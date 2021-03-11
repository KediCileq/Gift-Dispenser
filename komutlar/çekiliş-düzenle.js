const Discord = require('discord.js');
const db = require("quick.db")
const ms = require('ms');
exports.run = async (award, message, args) => {


  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("Bunun için **Üyeleri At** isimli yetkiye sahip olman lazım.")
    message.channel.send(embed);
    return;
  }
    
    let gweep = args[0];
    let kazanan = args[1];
    let odul = args[2];
    let zaman = args[3];
    if(!gweep) return message.channel.send("Mesaj id girmelisin. (çekiliş-düzenle: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
    if(!kazanan) return message.channel.send("Kazanan sayısını girmelisin. (çekiliş-düzenle: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
    if(!odul) return message.channel.send("Ödülü girmelisin. (çekiliş-düzenle: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
    if(!ms(zaman) && zaman) return message.channel.send("Zamanı girmelisin. (çekiliş-düzenle: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
            award.giveawaysManager.edit(gweep, {
                newWinnerCount: kazanan,
                newPrize: odul,
                addTime: ms(zaman)
            }).then(() => {
                message.channel.send("Başarılı bir şekilde çekiliş editlendi.");
            }).catch((err) => {
                message.channel.send("Belirtilen çekilişi bulamadım.");
            });
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'çekiliş-düzenle',
  description: '',
  usage: ''
};