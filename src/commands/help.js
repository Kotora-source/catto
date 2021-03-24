const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    description : 'Help the user with commands.',
    execute(message) {
        const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle(`Besoin d'aide ?`)
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the time
      .setTimestamp()
      //Set the footer
      .setFooter(`Merci de mentionner votre dictatrice et développeuse préférée en cas de problème ou réclamation.`)
      // Set the main content of the embed
      .setDescription(`Bonjour ${message.author.username}, voici les commandes que tu peux utiliser pour interagir avec moi :
      **!help** : obtenir de l'aide, ce que tu viens de faire :blush:
      **!cat** : je t'enverrai une photo de chat au hasard générée par une IA (thiscatdoesntexist.com)
      **!quokka** : pour avoir un aperçu du meilleur animal de la terre
      Bonne continuation sur ce serveur !`);
        // Send the embed to the same channel as the message
        message.channel.send(embed);
    }
};