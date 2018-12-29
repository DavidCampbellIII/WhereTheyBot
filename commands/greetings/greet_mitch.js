const Commando = require('discord.js-commando');

var morches = ["Morch", "Match", "Minchy", "Munch", "Mulch", "MixyMan", "Mort", "Milf", "Max", "Milkshake", "Mortician", "Maybe Mitch?", "Milk", "MinkCoat", "M&M", "MMMMMMM", "Mom", "Manada", "Mug", "Mag", "Moof", "Miff", "Mick", "Mac", "Mac And Cheese",
"Melt", "Matt", "Malibu", "Miss", "Mock", "Mall", "Make", "Mloopshmpoo", "Melk", "Moop", "Meep", "Moog", "Mook", "Mool", "Malice", "Moot", "Meat", "Mushroom Cow From Minecraft", "Mike", "Mill", "March", "Moore", "More Cow Bell", "Mining Incuded Lung Cancer",
"Muffin Man", "Magician From A Birthday Party 6 Years Ago", "Map"];

var length = morches.length;

class GreetMitchCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'greetmitch',
            group: 'greetings',
            memberName: 'greetmitch',
            description: 'Says hello to our favorite pal, Morch'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * length);
        message.channel.send("Hello " + morches[chance]);
    }
}

module.exports = GreetMitchCommand;