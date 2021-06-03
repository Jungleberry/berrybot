// Require packges
const fs = require('fs'); // Requires filesystem or 'fs' module
const Discord = require('discord.js'); // Requires discord.js module

const { prefix, token } = require('./config.json'); // Requires config.json which contains the prefix and token

const client = new Discord.Client(); // Creates a new client via discord.js
client.commands = new Discord.Collection(); 

const commandFolders = fs.readdirSync('./commands'); // Sets the variable of commandFolders as being located in the ./commands directory

// States to index the list of files found within the subfolders of the ./commands/ directory. Must end with .js
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

// Start bot functions below
client.once('ready', () => {
	console.log('Berrybot is online'); // When bot = ready status, log 'Berrybot is online'
});

// Message listener
client.on('message', message => {

	if (!message.content.startsWith(prefix)) return; // If message does not contain the prefix defined in config.json, ignore
	if (message.author.bot) return; // If message is from the bot, ignore

	const args = message.content.slice(prefix.length).trim().split(/ +/); // args variable that trims prefix from message and removes command name
	const command = args.shift().toLowerCase(); // Shifts args variable to all lowercase

	if (!client.commands.has(command)) return; // If no command is issued, ignore -- Will want to add a message stating not a valid command in the future

// If an error happens when processing a command, an error is thrown
	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// Client token used here to login
client.login(token);