const TOKEN = "MTM1MDAzOTE0MzQwMDQ3MjYwNg.GG5Klj.9HJSozcpetMtVlK_IENiW7vcOUJ96i4rzvW17Y";
const CLIENT_ID = "1350039143400472606";

const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',
    description: 'generates a short-url',
  },
  {
    name: 'ping',
    description: 'returns a image',
  }
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();