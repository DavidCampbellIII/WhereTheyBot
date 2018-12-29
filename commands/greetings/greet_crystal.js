const Commando = require('discord.js-commando');
class GreetCrystalCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'greetcrystal',
            group: 'greetings',
            memberName: 'greetcrystal',
            description: 'Say hi to Crystal'
        });
    }

    async run(message, args)
    {
        message.channel.send("Yo waddup, it's my main pal Crystal, the most wholesome in the server!");
    }
}

module.exports = GreetCrystalCommand;