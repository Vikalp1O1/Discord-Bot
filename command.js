import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name:'joke',
    description:'Replies with a Knock-Knock Joke',
  }
];

const rest = new REST({ version: '10' }).setToken(Your_Discord_Token);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(Your_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}