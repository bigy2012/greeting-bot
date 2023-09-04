const { REST, Routes } = require('discord.js');

const dotenv = require('dotenv');


dotenv.config();

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {
        name: 'hi',
        description: 'Greeting everyone in the room',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

try {
    console.log('Started refreshing application (/) commands.');

    rest.put(Routes.applicationCommands(process.env.CLIENT_ID, process.env.Channel_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}