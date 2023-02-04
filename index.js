import { Client } from "discord.js"
import 'dotenv/config'
const client = new Client({
	intents: ["GUILDS", "GUILD_MESSAGES"],
	presence: {status: "idle", activities: [{ name: "template", type: "PLAYING" }]}
})

client.once("ready", () => {
	console.log('template started!')
})

client.on("messageCreate", message => {
	var prefix = "!";
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === 'ping') {
		message.reply('Pong!');
	}
})

client.login(process.env.token)