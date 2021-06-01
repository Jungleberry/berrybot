// Require dotenv
const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require ('dotenv');
dotenv.config();

// Discord Bot Login
client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);
