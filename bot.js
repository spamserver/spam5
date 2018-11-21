const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("514825948454060033")
setInterval(function() {
channel.send(`spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam `);
}, 25)
})
 
client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "5say") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.login('NTE0ODcwMzUxNTEyMjA3Mzkw.Dtc41g.UEFHs2cQjmxVqpfrpxYqa9GlsYE');
