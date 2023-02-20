require('dotenv').config();

const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_AUTH_CLIENT,
		password: process.env.TWITCH_USERNAME
	},
	channels: [ 'longkarluk', 'hard_pretzel' ]
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!hello') {
		client.say(channel, `@${tags.username}, heya!`);
	}
    console.log(channel, message, tags, self);
});