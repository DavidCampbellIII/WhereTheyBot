const Commando = require('discord.js-commando');
var responses = ["I don't wanna...", "Wait, Gage is here...?", "I'm too scared...", "Is he the one who did me the big ouch...?"];
var length = responses.length;
class GreetGageCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'greetgage',
            group: 'greetings',
            memberName: 'greetgage',
            description: 'Say hi to Gage'
        });
    }

    
    async run(message, args)
    {
        var chance = Math.floor(Math.random() * length);
        message.channel.send(responses[chance]);
    }
}

module.exports = GreetAmandaCommand;