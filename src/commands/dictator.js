module.exports = {
    name: 'dictator',
    description : 'Send a cheer to our dictator',
    execute(message) {
        message.channel.send(`Gloire à notre dictatrice !`);
    }
};