const Commando = require('discord.js-commando');
const fs = require("fs");
//const list = require("../../data/list.txt");

var listText = fs.readFileSync(__dirname + "/../../data/list.txt", "utf8");
console.log(listText);

class AddListCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'addlist',
            group: 'simple',
            memberName: 'addlist',
            description: 'Adds a new item to the List'
        });
    }

    async run(message, args)
    {
       
    }

    
}

module.exports = AddListCommand;