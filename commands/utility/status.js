const Commando = require('discord.js-commando');
var startTime;
class StatusCommand extends Commando.Command{
    constructor(client)
    {
        startTime = new Date();
        super(client,{
            name: 'status',
            group: 'utility',
            memberName: 'status',
            description: 'Displays current uptime status in seconds of Where They Bot'
        });
    }

    async run(message, args)
    {
        message.delete(0);
        var seconds = Math.floor((new Date() - startTime) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);

        if(seconds >= 60)
        {
            seconds %= 60;
        }

        if(minutes >= 60)
        {
            minutes %= 60;
        }
        message.channel.send("I have been active and running for " + hours + "h " + minutes + "m " + seconds + "s since the last shutdown/update!");
    }
}

module.exports = StatusCommand;