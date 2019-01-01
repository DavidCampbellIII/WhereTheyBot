const Commando = require('discord.js-commando');
class GreetSimonCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'greetcris',
            group: 'greetings',
            memberName: 'greetcris',
            description: 'Say hi to Cris'
        });
    }

    async run(message, args)
    {
        message.channel.send("Mah boi Cris, how's it hanging?");
    }
}

module.exports = GreetSimonCommand;