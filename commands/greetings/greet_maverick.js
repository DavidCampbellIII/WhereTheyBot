const Commando = require('discord.js-commando');

var responses = ["Hey Mav, I know you're busy, but I really need you inside my asshole right now.", "It's my main man Mav.  What would we do without him??"];
var length = responses.length;

class GreetMaverickCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'greetmaverick',
            group: 'greetings',
            memberName: 'greetmaverick',
            description: 'Say hi to Maverick'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * length);
        message.channel.send(responses[chance]);
    }
}

module.exports = GreetMaverickCommand;