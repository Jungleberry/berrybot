module.exports = {
	name: 'beep',
	description: 'Beep!',
	execute(message) {
		message.channel.send('Boop.');
		console.log('Beep command triggered.');
	},
};