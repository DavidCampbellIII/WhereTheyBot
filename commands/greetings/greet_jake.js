const Commando = require('discord.js-commando');
class GreetJakeCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'greetjake',
            group: 'greetings',
            memberName: 'greetjake',
            description: 'Say hi to Jake'
        });
    }

    async run(message, args)
    {
        message.channel.send("Hello Jake, dad of the server.");
    }
}

module.exports = GreetJakeCommand;