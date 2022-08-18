const { SlashCommandBuilder } = require('@discordjs/builders');
const Pterodactyl = require('pterodactyl.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stop a random shit server lol')
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



		}
	}
