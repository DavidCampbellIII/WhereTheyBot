const Commando = require('discord.js-commando');
class GreetAmandaCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'greetamanda',
            group: 'greetings',
            memberName: 'greetamanda',
            description: 'Say hi to Amanda'
        });
    }

    async run(message, args)
    {
        message.channel.send("Hi Amanda,  the person who everyone loves!");
    }
}

module.exports = GreetAmandaCommand;