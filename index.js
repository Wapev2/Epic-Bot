const Discord = require("discord.js");

const TOKEN = "Mzk1MzQxMTYyNjQwMzEwMjcz.DSVhpA.2QRFhGlxAaFp2Ez7yiywQgbrMs8";
const PREFIX = "!"

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready")
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLocaleLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "apply":
            var embed = new Discord.RichEmbed()
                .addField("Staff Applications:", "Coming Soon")
                .setColor(0x00CC00)
            message.channel.sendEmbed(embed);
            break;
        case "ip":
            var embed = new Discord.RichEmbed()
                .addField("Server IP:", "EpicNetwork.surv.nu")
                .setColor(0x00CC00)
            message.channel.sendEmbed(embed);
            break;
        case "forums":
            var embed = new Discord.RichEmbed()
                .addField("Forums:", "Coming Soon")
                .setColor(0x00CC00)
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("**Invalid Command**");
   }
});

bot.login(TOKEN);\\
