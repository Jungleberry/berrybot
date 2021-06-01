// Dependcies
const Discord = require('discord.js'); // Imports discord.js module
const { prefix, token } = require('./config.json'); // Sets Prefix and Token properties

// Loads new Discord Client
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
//    client.user.setAvatar('./images/six.png')
//        .then(user => console.log('Avatar set!'));
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login(token); // Logs in via token in config.json
