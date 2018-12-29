const Commando = require('discord.js-commando');
class PingR6Command extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'pingr6',
            group: 'gaming',
            memberName: 'pingr6',
            description: 'Ping everyone who typically plays Rainbow 6 Seige and ask them to play a game'
        });
    }

    async run(message, args)
    {
        message.delete(0);
        let group1 = message.guild.roles.find("name", "R6_CASUAL_PLAYERS");
        let group2 = message.guild.roles.find("name", "R6_RANKED_PLAYERS");
        message.channel.send(group1 + " " + group2 + " " + message.author + " is looking for R6 players...");
    }
}

module.exports = PingR6Command;