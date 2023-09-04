const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const dotenv = require('dotenv');
dotenv.config();



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {

    const name = "name :"

    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }

    if (interaction.commandName === 'hi') {
        await interaction.reply('ยินดีต้อนรับเข้าสู่ห้องแห่งรอยยิ้มนะจ๊ะ');
    }
});

client.login(process.env.TOKEN);