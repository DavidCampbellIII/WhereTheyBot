const Commando = require('discord.js-commando');
const discord  = require('discord.js');
class ListCommandsCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'listcommands',
            group: 'utility',
            memberName: 'listcommands',
            description: 'Lists all available commands'
        });
    }

    async run(message, args)
    {
        message.delete(0);
        var info = new discord.RichEmbed()
            .setTitle("**__Available Commands (1 of 2)__**")
            .setDescription("These are all the commands that are currently available for the Where They Bot! (16 in total!)")
            .setThumbnail(message.guild.me.user.avatarURL)
            .setColor(message.guild.roles.find("name", "Bot Goblins").hexColor)

            .addField("**__GREETINGS__**", "Greet one another with custom greetings for some special people")
            .addField("*!greetamanda*", "Say hi to Amanda!")
            .addField("*!greetcris*", "Say hi to Cris!")
            .addField("*!greetcrystal*", "Say hi to Crystal!")
            .addField("*!greetdavid*", "Say hi to David III!")
            .addField("*!greetdavid*", "Say hi to Gage!")
            .addField("*!greetjake*", "Say hi to Jake!")
            .addField("*!greetmaverick*", "Say hi to Maverick!")
            .addField("*!greetmitch*", "Say hi to our favorite pal Morch!")
            .addField("*!greetshon*", "Say hi to Shon!")
            .addField("*!greetsimon*", "Say hi to Simon!")
            .addBlankField()
            .addField("**__GAMING__**", "These commands are for gaming related needs")
            .addField("*!pingr6*", "Ping everyone who typically plays Rainbow 6 Seige and ask them to play a game")
            .addField("*!pingr6ranked*", "Ping everyone who typically plays Rainbow 6 Seige and ask them to play a ranked game")
            .addBlankField()
            .addField("**__FUN__**", "These commands are fun little things")
            .addField("*!encode*", "Encode a message in David\'s special secret language")
            .addBlankField()
            .setFooter("If you have any questions about the Where They Bot, ask @DavidIII.  He is usually pretty happy to help.", message.guild.me.user.avatarURL)

        var info2 = new discord.RichEmbed()
            .setTitle("**__Available Commands (2 of 2)__**")
            .setDescription("These are all the commands that are currently available for the Where They Bot! (16 in total!)")
            .setThumbnail(message.guild.me.user.avatarURL)
            .setColor(message.guild.roles.find("name", "Bot Goblins").hexColor)

            .addField("**__SIMPLE__**", "These commands are simple and unrelated to anything specific")
            .addField("*!flipcoin*", "Literally just flips a coin.  Nothing fancy")
            .addBlankField()
            .addField("**__UTILITY__**", "These commands are for things related to the Where They Bot itself")
            .addField("*!botscore*", "Displays the current Good Bot Score")
            .addField("*!listcommands*", "Displays a full list of all the commands, grouped by command type")
            .addField("*!status*", "Displays the amount of time the bot has been running since the last edit/disconnection in hours/minutes/seconds time format")
            .addBlankField()
            .setFooter("If you have any questions about the Where They Bot, ask @DavidIII.  He is usually pretty happy to help.", message.guild.me.user.avatarURL)
        message.channel.send(info);
        message.channel.send(info2);
    }
}

module.exports = ListCommandsCommand;
