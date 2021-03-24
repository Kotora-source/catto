module.exports = {
    name: 'cat',
    description : 'Send a cat picture',
    execute(message) {
        //return a random integer btw 1 and 1 000 000
        const randomQuery = Math.floor(Math.random() * 1000000) + 1;
        //send a url with a random query
        message.channel.send(`https://thiscatdoesnotexist.com/?${randomQuery}`);
    }
};