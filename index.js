// Dependencies
const Discord = require('discord.js'); // Require discord.js module
const dotenv = require ('dotenv');
dotenv.config();

// Create a new Discord Client
const client = new Discord.Client();

// Discord Bot Login
client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);
