import knockknock from 'knock-knock-jokes';
 
import { Client, GatewayIntentBits, InteractionResponse, User } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate",(message)=>{
   if(message.author.bot) return;
   message.reply({
    content:"Hello, There",
   });
});

const joke = await knockknock();

client.on('interactionCreate',(interaction) =>{
  interaction.reply(joke);
}); 

 
client.login(Your_DISCORD_TOKEN);

 
 

 