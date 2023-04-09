const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'anonymous') {
    const messageToSend = args.join(' ');
    message.channel.send(`Someone says: ${messageToSend}`);
    message.delete();
  }
});

client.login(process.env.TOKEN);
