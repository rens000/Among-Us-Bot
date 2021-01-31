const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const welcome = require('./Welcome');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	console.log('importing ' + file);
}
//trying the add welcome message

client.once('ready', () => {
	console.log('Ready!');
	welcome(client);
});

/*client.on('guildMemberAdd', member => {
    member.guild.channels.get('804574737946640405').send("Welcome"); 
});*/

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
		
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
		
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}


});


client.login(token);