const { SlashCommandBuilder } = require('@discordjs/builders');


const suspensionCommand = new SlashCommandBuilder()
    .setName('suspension')
    .setDescription('A command for easily sending a suspension embed.')
    .addStringOption((option) =>
        option
            .setName('rank')
            .setDescription('Rank of the Officer or person you are suspending.')
            .setRequired(true)
    ).addStringOption((option) => 
       option
            .setName('name')
            .setDescription('Name of the Officer you are suspending.')
            .setRequired(true)
     ).addStringOption((option) => 
       option
            .setName('days')
            .setDescription('Number of days you are suspending the Officer for.')
            .setRequired(true)
     ).addStringOption((option) =>
        option
             .setName('signature')
             .setDescription('Name of the Internal Affairs Detective who is suspending the Officer.')
             .setRequired(true)
    );

export default orderCommand.toJSON();
