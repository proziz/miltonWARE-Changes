const { Client, GatewayIntentBits, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const dotenv = require('dotenv');
const OrderCommand = require('./commands/order.js');

dotenv.config()

const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

client.on('ready', () => {
    console.log('miltonWARE is now online!')
})


client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()) {
        interaction.reply({
            content: `miltonWARE; command executed successfully.`,
        });
    }
});

async function main() {
    
    const commands = [
        OrderCommand
    ];

    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: commands,
        });
        client.login(process.env.TOKEN);
    } catch (err) {
        console.log(err);
    }
}

main();
// client.login(process.env.TOKEN)
