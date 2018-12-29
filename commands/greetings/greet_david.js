const Commando = require('discord.js-commando');
class GreetDavidCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'greetdavid',
            group: 'greetings',
            memberName: 'greetdavid',
            description: 'Say hi to David III'
        });
    }

    async run(message, args)
    {
        message.channel.send("Hello David David David!");
    }
}

module.exports = GreetDavidCommand;