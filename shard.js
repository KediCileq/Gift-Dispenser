const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./bot.js", {
    token: require("./ayarlar.json").token,
    totalShards: 2,
});

console.log("Selam, "+require("os").userInfo().username+". Teşekkürler.");
manager.spawn();