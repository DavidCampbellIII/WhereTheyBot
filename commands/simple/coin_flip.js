const Commando = require('discord.js-commando');

class CoinFlipCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'flipcoin',
            group: 'simple',
            memberName: 'flipcoin',
            description: 'Literally just flips a coin.  Nothing fancy'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.reply("Heads");
        }
        else
        {
            message.reply("Tails");
        }
    }
}

module.exports = CoinFlipCommand;