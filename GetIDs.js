const {Client, Intents} = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const spyMap = {
	//House Nuvell
	"808001344115310622": {
		"811301003122835457" : true
	},
	
	//steakboiyeetserver
	"911843492651741234" : {
		"924861159125966868" : true
	}
}

function processChannels(channels) {
	
	conciseObject = {}
	
	channels.forEach((channel)=>{
		if (!(channel.guild.id in conciseObject)) {
			conciseObject[channel.guild.id] = {}
			conciseObject[channel.guild.id]["name"] = channel.guild.name;
			conciseObject[channel.guild.id]["channels"] = {}
		} 
		
		conciseObject[channel.guild.id]["channels"][channel.id] = channel.name;
		
	});
	
	
	return conciseObject;
}

client.once('ready', () => {
	console.log("Claude bot Matinence");
	console.log(processChannels(client.channels.cache));
	
	
	var loc = process.cwd();
	fs.writeFile(loc +"/spyMap.json", JSON.stringify(spyMap), err => {
		if (err) {
			console.error(err)
			return
		}		
	});
});


client.login("OTExODYyNDQ3MTA1Nzk4MTc1.YZnkFA.2YzIwRxi89nNepomfYY6EW3-c0I");
