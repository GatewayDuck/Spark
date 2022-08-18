const { SlashCommandBuilder } = require('@discordjs/builders');
const Pterodactyl = require('pterodactyl.js');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('start')
		.setDescription('Start a random shit server lol')
	  .addStringOption(option =>
		option.setName('server')
			.setDescription('The server to start.')
			.setRequired(true)
			.addChoices(
				{ name: 'Proxy', value: 'proxy' },
				{ name: 'Lobby', value: 'lobby' },
				{ name: 'DeathCore', value: 'deathcore' },
				{ name: 'EmberSMP', value: 'embersmp' },
				{ name: 'MythosSMP', value: 'mythos' },
			)),
	async execute(interaction) {
		await interaction.reply('Pong!');
		const srvStart = interaction.options.getString('server')
		console.log(srvStart)

		switch (srvStart) {
			case "proxy":
				 break;
			case "lobby": 
				break;
			case "deathcore":
				break;
			case "embersmp":
				break;
			case "mythos":
				break;

		}
	},
};
