require('dotenv').config(); //initialize dotenv
const {Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log("Claude bot loaded");
});

quotes = [

"Being noble has nothing to do with who you are as a person or how hard your life is. Your logic is illogical!",
"Remember, we’re not just fighting for honor. There’s a prize at stake!",
"Hey, Your Royalness! If you promise to let me have the prize, I'll let you take the honor of victory. Do we have a deal?",
"Hey, Princess! Heads up! There's a rat right by your Imperial feet...",
"Saw right through me, did you? Well, if there's no deal, I'll just have to win this thing fair and square!",
"Hey, Princess! Heads up! There's a rat right by your Imperial feet...",
"Ah, so the sheer terror in your eyes was...something else entirely. My mistake. Anyway, it was only a joke",
"Eating is life. Literally, you'll die without it",
"The meaning of life is Food",
"Sorry, but it's about time I make my exit... The rest of you...please, finish the job!",
"Ah, what a burden to be great at everything",
"If you were actually good for anything at all, I'd at least expect you to recognize who I am...",
"Yet we have the strength to scale the walls between us. To reach out our hands in friendship, so we can open our true hearts to one another. That’s how we win!",
"I'm the grandson of the grandson of the grandson of the elite Riegan. Now tell me who you are!",
"Is it that mask that's to blame for your curtness? If so, maybe I should rip it off and ask again",
"Here she is - Her Majesty - looking pleased as a dog with a stick. What exactly happened to make you this way?",
"Isn't this much force excessive? Thanks to you, my own long-held ambitions are nearly destroyed",
"We haven't seen each other since Garreg Mach. You've grown lovelier than ever Edelgard",
"You barely snatch me from the jaws of death, and now you're recruiting me! You sure know how to inspire loyalty, Your Majesty",
"I missed that face! And you're just in time. Thanks for that"

];


client.on('messageCreate', message => {
	if (message.content.toLowerCase().includes("claude") && message.author.username != "ClaudeBot") { 
    		console.log("Got message: ", message.content, " from: ", message.author.username, "At time: ", message.createdAt);
		message.channel.send(quotes[Math.floor(Math.random() * quotes.length)]);
	}
});


client.login(System.env.CLIENT_TOKEN);

