const discord = require("discord.js");
var client = new discord.Client();

client.on("ready", function() {

    console.log(client.user.tag + " | Connection to Discord established successfully.");

});

client.on("message", function(msg) {
    if(msg.webhookID) {
        msg.channel.guild.owner.send(new discord.MessageEmbed()
            .setTitle("Webhook triggered")
            .setDescription("A webhook was triggered in <#" + msg.channel.id + "> with the following content (embeds and attachments not displayed):\n\n```" + msg.content + "```")
            .setTimestamp());
    }
});

client.on("webhookUpdate", function(channel) {
    
    channel.guild.owner.send(new discord.MessageEmbed()
        .setTitle("Webhook added/edited")
        .setDescription("A webhook addition/change was detected in <#" + channel.id + ">.")
        .setTimestamp());

    channel.send("<@" + channel.guild.ownerID + ">", new discord.MessageEmbed()
        .setTitle("Webhook added/edited")
        .setDescription("A webhook addition/change was detected for this channel.")
        .setTimestamp());

});

client.login(require("./config.json").token);