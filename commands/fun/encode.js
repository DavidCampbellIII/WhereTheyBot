const Commando = require('discord.js-commando');
var wordStart = "ja";
var letterCode = "j";
class EncodeCommand extends Commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'encode',
            group: 'fun',
            memberName: 'encode',
            description: 'Encode a message in David\'s special secret language'
        });
    }

    
    async run(message, args)
    {
        var messageContent = message.content.toLowerCase().substring(7); //removes !encode from message
        messageContent = messageContent.trim();
        messageContent = messageContent.replace(",", "");
        messageContent = messageContent.replace(".", "");
        messageContent = messageContent.replace("'", "");
        var result = wordStart[0].toUpperCase() + wordStart.substring(1);
        var lastChar = messageContent.charAt(messageContent.length - 1);
        var expressiveMark = "";
        if(lastChar == '!')
        {
            expressiveMark = "!";
        }
        else if(lastChar == "?")
        {
            expressiveMark = "?";
        }

        result = expressiveMark + expressiveMark + result;

        for(let i = 0; i < messageContent.length; i++)
        {
            if(isLetter(messageContent.charAt(i)))
            {
                if(messageContent.charAt(i + 1) == ' ')
                {
                    result += messageContent.charAt(i) + wordStart;
                }
                else 
                {
                    result += messageContent.charAt(i);

                    if(i != messageContent.length - 1)
                    {
                        result += letterCode;
                    }
                }
            }
            else if(messageContent.charAt(i) == " ")
            {
                if(isLetter(messageContent.charAt(i + 1)))
                {
                    result += messageContent.charAt(i) + wordStart;
                }
                else
                {
                    result += messageContent.charAt(i);
                }
            }
        }

        result += wordStart;

        result += expressiveMark + expressiveMark;
        message.delete(0);
        message.channel.send(result);
    }
}

function isLetter(c)
{
    return c.toLowerCase() != c.toUpperCase();
}

module.exports = EncodeCommand;