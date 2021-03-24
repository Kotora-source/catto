const fs = require('fs');
const Discord = require('discord.js');

//Récupération des informations de configuration
const { prefix, token } = require('./src/conf/config.json');

//Nouveau client
const client = new Discord.Client();
client.commands = new Discord.Collection();

//Trouve les fichiers de commandes
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./src/commands/${file}`);
  client.commands.set(command.name, command);
};

//Récupération de la liste des mots
const wordlists = require('./src/jsonfiles/wordlists.json');

/*
  EVENTS
*/

//Quand Cattô est opérationnel
client.once('ready', () => {
  console.log('Ready!');
});



//A chaque message (channels où Cattô est présent)
client.on('message', message => {
  
  //Cattô réagit à une salutation le concernant
  if (wordlists.GREETINGS.some(word => message.content.toLowerCase().includes(word)) && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false) {
    //selectionne une valeur entre 1 et 2
    let randomgreet = Math.floor(Math.random() * 2) + 1;

    //Sélectionne une réponse au hasard
    switch (randomgreet) {
        case 1:
          message.channel.send(`Salut ${message.author.username} !`);
            break;
        
        case 2:
            message.reply(`Coucou !`);
            break;
    }
    
  }

  //Cattô réagit quand on l'insulte
  else if (wordlists.BADWORDS.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false) {
    message.reply(`On parle pas comme ça hein !`);
  }

  //Cattô réagit à "ok cattô"
  else if (message.content.toLowerCase().startsWith(`ok`) && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false) {
    message.reply(`Désolé mais je suis pas Google ?`);
  }

  //Cattô réagit aux commandes
  else if (!message.content.startsWith(prefix) && message.author.bot == false ) return;

    //splite la commande du ! au mot et met en minuscules
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //si la commande n'existe pas, ne retourne rien
    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("Une erreur s'est produite pendant l'exécution de la commande !");
    };

})


//Connexion
client.login(token).catch(console.error);
