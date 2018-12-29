const Commando = require('discord.js-commando');
class PingR6RankedCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'pingr6ranked',
            group: 'gaming',
            memberName: 'pingr6ranked',
            description: 'Ping everyone who typically plays Rainbow 6 Seige and ask them to play a ranked game'
        });
    }

    async run(message, args)
    {
        message.delete(0);
        let group1 = message.guild.roles.find("name", "R6_RANKED_PLAYERS");
        message.channel.send(group1 + " " + message.author + " is looking for R6 players for a RANKED MATCH...");
    }
}

module.exports = PingR6RankedCommand;