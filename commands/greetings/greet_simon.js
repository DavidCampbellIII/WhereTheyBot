const Commando = require('discord.js-commando');
class GreetSimonCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'greetsimon',
            group: 'greetings',
            memberName: 'greetsimon',
            description: 'Say hi to Simon'
        });
    }

    async run(message, args)
    {
        message.channel.send("Hello Simon, you sexy son of a bitch.");
    }
}

module.exports = GreetSimonCommand;