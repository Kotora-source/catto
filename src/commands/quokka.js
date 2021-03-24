module.exports = {
    name: 'quokka',
    description : 'Send a quokka selfie with a stranger',
    execute(message) {
        message.channel.send(`Meilleur animal de la terre`, {files: ["src/img/quokkaOG.png"]});
    }
};