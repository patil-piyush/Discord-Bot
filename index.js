

//important constants to login as a bot
const TOKEN = "MTM1MDAzOTE0MzQwMDQ3MjYwNg.GG5Klj.9HJSozcpetMtVlK_IENiW7vcOUJ96i4rzvW17Y";

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent,
    ] 
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url = message.content.split("create ")[1];
        return message.reply({
            content: "Generating Short ID for " + url,
        });
    }

    if(message.content.startsWith('ping')){
        const img = `${'./1.jpg'}`;
        return message.reply({
            content: img,
        });
    }


    message.reply({
        content:"Hi from BOT!!",
    });
});

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!!!");
})

client.login(TOKEN);