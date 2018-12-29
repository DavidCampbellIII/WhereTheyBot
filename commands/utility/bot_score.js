const Commando = require('discord.js-commando');
const fs = require("fs");
const saveData = require("../../data/saveData.json");

class BotScoreCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'botscore',
            group: 'utility',
            memberName: 'botscore',
            description: 'Displays the current Good Bot Score of Where They Bot'
        });
    }

    async run(message, args)
    {
        var score = saveData["good bot score"].score;
        message.channel.send("My Good Bot Score is currently: \t**" + score + "**");
        if(score >= 5)
        {
            message.channel.send("Not bad :smirk:");
        }
        else if(score <= -5)
        {
            message.channel.send("I'm going through a rough patch :cry:");
        }
    }
}

module.exports = BotScoreCommand;