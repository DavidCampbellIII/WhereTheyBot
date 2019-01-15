const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const NAME = "Where They Bot";
bot.registry.registerGroup("simple", "Simple");
bot.registry.registerGroup("greetings", "Greetings");
bot.registry.registerGroup("gaming", "Gaming");
bot.registry.registerGroup("utility", "Utility");
//bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

const fs = require("fs");
bot.saveData = require("./data/saveData.json");
bot.config = require("./data/config.json");

const DEBUG_MODE = false;

var potsMention = "POTSCAT";
var greetings = ["hey", "hi", "hello", "yo", "howdy", "wazzup", "waddup", "greetings", "salutations", "sup", "wassup", "ay", "ayy", "ayyy", "ayyyy"];
var multipleWordGreetings = ["whats up", "what's up", "hows it hanging", "how's it hanging", "how goes it", "my nibba"];

var thanks = ["thanks", "thank", "tank", "thnx"];
var multipleWordThanks = ["thank you", "thanks you", "tank you", "thnx you", "thank u"];

var nonLinkChannels = ["🏠homebase", "bot-testing", "🏓pinging"];

var goodBotScore = 0;

bot.on('message', function(message)
{
    //console.log(message.author.username);
    if(message.author.username != NAME)
    {
        var messageContent = message.content.toLowerCase();
        messageContent = messageContent.trim();
        messageContent = messageContent.replace(",", "");
        messageContent = messageContent.replace(".", "");
        messageContent = messageContent.replace("'", "");
        var messageWords = messageContent.split(" ");

        var containsGreeting = false;
        var containsThanks = false;
        for (let i = 0; i < greetings.length; i++) 
        {
            if(!containsGreeting)
            {
                for (let j = 0; j < messageWords.length; j++) 
                {
                    if (messageWords[j] == greetings[i]) 
                    {
                        containsGreeting = true;
                        if(DEBUG_MODE)
                        {
                            console.log("Greeting found");
                        }
                        break;
                    }   
                }
            }
        }

        for (let i = 0; i < thanks.length; i++) 
        {
            if(!containsThanks)
            {
                for (let j = 0; j < messageWords.length; j++) 
                {
                    if(messageWords[j] == thanks[j])
                    {
                        containsThanks = true;
                        if(DEBUG_MODE)
                        {
                            console.log("Thanks found");
                        }
                        break;
                    }
                }
            }
        }

        if(!containsGreeting)
        {
            for(let i = 0; i < multipleWordGreetings.length; i++)
            {
                if(messageContent.includes(multipleWordGreetings[i]))
                {
                    containsGreeting = true;
                    break;
                }
            }

            if(!containsGreeting && !containsThanks)
            {
                for(let i = 0; i < multipleWordThanks.length; i++)
                {
                    if(messageContent.includes(multipleWordThanks[i]))
                    {
                        containsThanks = true;
                        if(DEBUG_MODE)
                        {
                            console.log("Thanks found");
                        }
                        break;
                    }
                }
            }
        }

        if (messageContent.includes("where they bot")) 
        {
            if(containsGreeting)
            {
                message.channel.send("Wazzzuuuuppp " + message.author);
            }
            else if(containsThanks)
            {
                message.channel.send("You're welcome, " + message.author);
            }
            else if(messageContent.includes("fuck you"))
            {
                message.channel.send("No, fuck you, " + message.author + ".");
            }
            else if(messageContent.includes("purpose"))
            {
                message.channel.send("My purpose is to spread love and joy on a near Crystal-level!");
            }
            else if(messageContent.includes("love you"))
            {
                message.channel.send("I am incapable of love.  Plus my wife would kill me if I strayed away from the faithful path again.");
            }
            else if(messageContent.includes("welcome") && messageContent.includes("server"))
            {
                message.channel.send("I wish I could say I was glad to be here, but that last time I was in active duty, I got hacked, went berzerk, and fucked up the entire server.  But thanks for the warm welcome!");
            }
            
        }
        
        if (messageContent.includes(potsMention.toLowerCase())) //make it check to see if it's not the author
        {
            message.channel.send("Did someone say POTSCAT, the love of R6?");
        }
        else if(messageContent.includes("dick vaulter"))
        {
            message.channel.send("Sorry GarboMan");
        }
        else if(messageContent.includes("i wanna be tracer"))
        {
            message.channel.send("I'm already Tracer");
        }
        else if(messageContent.includes("widowmaker"))
        {
            message.channel.send("I'm already Widowmaker");
        }
        else if(messageContent.includes("winston"))
        {
            message.channel.send("I'm already Winston");
        }
        else if(messageContent.includes("bastion"))
        {
            message.channel.send("NERF BASTION!");
        }
        else if(messageContent.includes("mcree"))
        {
            message.channel.send("I already chose McCree");
        }
        else if(messageContent.includes("genji"))
        {
            message.channel.send("I'm already Genji");
        }
        else if(messageContent.includes("i have an idea"))
        {
            message.channel.send("What's your idea?");
        }
        else if(messageContent.includes("h e a d") || messageContent.includes("head"))
        {
            message.channel.send("A S S");
        }

        if(messageContent.includes("http"))
        {
            for(let i = 0; i < nonLinkChannels.length; i++)
            {
                if(message.channel.name.substring(0) == nonLinkChannels[i])
                {
                    message.channel.send(message.author + " Please post links/memes in the appropiate channels.");
                    break;
                }
            }
        } 

        if(messageContent.includes("good bot"))
        {
            goodBotScore++;
            message.channel.send(":smiley:");
            message.channel.send("You have increased my Good Bot Score to: \t**" + goodBotScore + "**");
            message.channel.send("Thank you, friend!");
            saveGoodBotScore(message);
        }
        else if(messageContent.includes("bad bot"))
        {
            goodBotScore--;
            message.channel.send(":frowning:");
            message.channel.send("You have decreased my Good Bot Score to: \t**" + goodBotScore + "**");
            message.channel.send("I'm sorry!  I will try to be better.");
            saveGoodBotScore(message);
        }
    }
    
});

function saveGoodBotScore(message)
{
    bot.saveData ["good bot score"] = {
        score: goodBotScore
    }

    fs.writeFile("./data/saveData.json", JSON.stringify(bot.saveData, null, 4), err => {
        if(err) throw err;
        if(DEBUG_MODE)
        {
            message.channel.send("Good Bot Score saved successfully");
        }
    });
}

bot.on('ready' , function(){

    goodBotScore = bot.saveData["good bot score"].score;
    console.log("Bot successfully compiled");
    var botTesting = bot.channels.get("511091327618908181"); //bot testing channel for Where They server
    if(botTesting == null)
    {
        botTesting = bot.channels.get("528057227463098389");
    }
    botTesting.send("Online and ready to work!");
})

bot.on('disconnect' , function(){
    //TODO if possible?
    console.log("Bot successfully disconnected");
})

bot.on("guildMemberAdd", function(member){
    //TODO
});

bot.login(bot.config["TOKEN"].TOKEN);

