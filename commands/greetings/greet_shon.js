const Commando = require('discord.js-commando');
class GreetSimonCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'greetshon',
            group: 'greetings',
            memberName: 'greetshon',
            description: 'Say hi to Shon'
        });
    }

    async run(message, args)
    {
        message.channel.send("Hey Shon.  Shonnnnn.  SHOOOOONNNNNNNNNNNNN.");
    }
}

module.exports = GreetSimonCommand;